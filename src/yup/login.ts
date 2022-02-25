import { object, string } from "yup";

const loginSchema = object({
  username: string()
    .lowercase()
    .trim()
    .matches(/^[a-z0-9]{4,20}$/i, "Invalid username")
    .required("Username required"),
  password: string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long")
    .required("Password required"),
});

export default loginSchema;
