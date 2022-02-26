import { useState, useEffect } from "react";
import { Socket } from "phoenix";
import axios from "../lib/axios";

const useSocket = () => {
  const [loading, setLoading] = useState(true);
  const [tokenError, setTokenError] = useState<string>();

  const [socketToken, setSocketToken] = useState<null | string>(null);
  useEffect(() => {
    const token = window.localStorage.getItem("socketToken");
    if (token) {
      setSocketToken(token);
      return;
    }

    axios("/token")
      .then(({ data }) => {
        setSocketToken(data.token);
        window.localStorage.setItem("socketToken", data.token);
      })
      .catch(({ response }) => {
        const errorMessage =
          response?.errors?.detail ||
          "An error ocurred while connecting to the server";
        setTokenError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, []);

  const [socketError, setSocketError] = useState<string>();
  const [socket, setSocket] = useState<null | Socket>(null);
  useEffect(() => {
    if (!socketToken) return;
    const _socket = new Socket(
      `${process.env.REACT_APP_API_URL_FOR_SOCKET}/socket`,
      { params: { token: socketToken } }
    );
    _socket.connect();
    _socket.onOpen(() => {
      console.log("socket connected");
      setSocket(_socket);
    });
    _socket.onError(() => {
      setSocketError("An error ocurred while connecting to the server");
    });
  }, [socketToken]);

  return { socket, loading, tokenError, socketError };
};

export default useSocket;
