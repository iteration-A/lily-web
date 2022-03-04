import { useState, useEffect } from "react";
import axios from "../lib/axios";

type User = {
  username: string;
  id: number;
  first_name: string;
  last_name: string;
};
const useUser = () => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("/profiles")
      .then(({ data }) => setUser(data))
      .catch(({ response }) => {
        const unauthorized = response?.status === 401;
        const errorMessage = unauthorized
          ? "You need to log in first!"
          : "An error ocurred while loading app!";
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, []);

  return [user, loading, error];
};

export default useUser;
