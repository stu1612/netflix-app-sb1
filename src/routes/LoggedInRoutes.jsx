// npm
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// files
import { AuthContext } from "../contexts/AuthContext";
import Admin from "../pages/LoggedIn/Admin";
import Home from "../pages/LoggedIn/Home";

export default function LoggedInRoutes() {
  // global state
  const { admin } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {admin && <Route path="admin" element={<Admin />} />}
    </Routes>
  );
}
