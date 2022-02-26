import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const PrivatePage = ({ children }: { children: JSX.Element }) => {
  const [_user, loading, error] = useUser();

  if (loading) return null;

  if (error) {
    return <Navigate to="/login" state={{ error }} replace />;
  }

  return children;
};

export default PrivatePage;
