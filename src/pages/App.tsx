import Typography from "@mui/material/Typography";
import useSocket from "../hooks/useSocket";

const App = () => {
	const { socket } = useSocket();

	return <Typography variant="h1">Hello</Typography>
}

export default App;
