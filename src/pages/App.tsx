import { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import UserContext from "../contexts/userContext";
import useSocket from "../hooks/useSocket";
import useLobby from "../hooks/useLobby";

const App = () => {
  const { user } = useContext(UserContext);
  const { socket } = useSocket();
  const [lobby] = useLobby(socket, user?.id);
  useEffect(() => {
    if (!lobby) return;
    lobby.on("friend_joined", console.log);
		console.log(lobby)

    return () => lobby.off("friend_connected");
  }, [lobby]);

  return <Typography variant="h1">Hello, {user.username}</Typography>;
};

export default App;
