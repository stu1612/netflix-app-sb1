// npm
import { AuthContext } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Admin from "../pages/LoggedIn/Admin";
import Home from "../pages/LoggedIn/Home";
import LoggedInNavbar from "../components/LoggedInNavbar"; // files
import Watch from "../pages/LoggedIn/Watch";

export default function LoggedInRoutes() {
  // global state
  const { uid, admin } = useContext(AuthContext);
  return (
    <div>
      <LoggedInNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="watch" element={<Watch />} />
        {uid === admin && <Route path="admin" element={<Admin />} />}
      </Routes>
    </div>
  );
}
