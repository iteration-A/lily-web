import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AppPage from "./pages/App";

// TODO:
// protected routes
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </div>
  );
}

export default App;
