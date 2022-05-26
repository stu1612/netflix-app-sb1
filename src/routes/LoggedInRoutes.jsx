// npm
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";
// files
import { AuthContext } from "../contexts/AuthContext";
import Admin from "../pages/LoggedIn/Admin";
import Home from "../pages/LoggedIn/Home";
import Landing from "../pages/LoggedOut/Landing";

export default function LoggedInRoutes() {
  // global state
  const { uid, admin } = useContext(AuthContext);
  return (
    <div>
      <LoggedInNavbar />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Home />} />
        {uid === admin && <Route path="admin" element={<Admin />} />}
      </Routes>
    </div>
  );
}
