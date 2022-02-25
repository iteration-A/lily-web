import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Typography variant="h1" align="center">
        Welcome to Lily ✨
      </Typography>

      <div className={styles.buttons}>
        <div>
          <Button
            variant="contained"
            color="info"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("signin")}
          >
            Sign in
          </Button>
        </div>
        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/app")}
        >
          Go to app
        </Button>
      </div>
    </div>
  );
};

export default Home;
