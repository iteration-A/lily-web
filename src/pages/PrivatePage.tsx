import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import UserContext from "../contexts/userContext";

const PrivatePage = ({ children }: { children: JSX.Element }) => {
  const [user, loading, error] = useUser();

  if (loading) return null;

  if (error) {
    return <Navigate to="/login" state={{ error }} replace />;
  }

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default PrivatePage;
