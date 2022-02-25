import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h1" align="center" color="white">
        Welcome to Lily ✨
      </Typography>

      <div className={styles.buttons}>
        <div>
					<Button variant="contained" color="info">
						<Link to="/login">Log in</Link>
					</Button>
          <Button variant="contained" color="secondary">Sign in</Button>
        </div>
					<Button variant="contained" color="error">Go to app</Button>
      </div>
    </div>
  );
};

export default Home;
