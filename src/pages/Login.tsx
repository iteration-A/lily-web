import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import loginSchema from "../yup/login";
import axios from "../lib/axios";
import styles from "./Login.module.css";

type LoginFormData = {
  username: string;
  password: string;
};
const Login = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const submitHandler = (
    data: LoginFormData,
    { setSubmitting }: FormikHelpers<LoginFormData>
  ) => {
    axios
      .post("/login", { user: data })
      .then(() => {
        closeSnackbar();
        enqueueSnackbar("You are now logged in! Redirecting...", {
          variant: "success",
        });
        navigate("/app", { replace: true });
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.errors?.detail ||
          "An error ocurred while login in!";
        closeSnackbar();
        enqueueSnackbar(`Server says: ${errorMessage}`, { variant: "error" });
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.container}>
      <Typography variant="h2" align="center">
        Log in
      </Typography>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
							<label htmlFor="username">Username</label>
              <Field className={styles.input} type="text" id="username" name="username" />
              <ErrorMessage className={styles.error} name="username" component="div" />
            </div>

            <div>
							<label htmlFor="password">Password</label>
              <Field className={styles.input} type="password" id="password" name="password" />
              <ErrorMessage className={styles.error} name="password" component="div" />
            </div>

            <LoadingButton
							color="primary"
							variant="contained"
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Log in
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
