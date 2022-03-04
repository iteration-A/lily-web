import { createContext } from "react";

const UserContext = createContext<{user: any}>({ user: null });

export default UserContext;
