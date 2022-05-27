// npm
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";
import Navbar from "../components/Navbar";
// files
import { AuthContext } from "../contexts/AuthContext";
import Admin from "../pages/LoggedIn/Admin";
import Home from "../pages/LoggedIn/Home";
import Landing from "../pages/LoggedOut/Landing";
import Watch from "../pages/LoggedIn/Watch";

export default function LoggedInRoutes() {
  // global state
  const { uid, admin } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="watch" element={<Watch />} />
        {uid === admin && <Route path="admin" element={<Admin />} />}
      </Routes>
    </div>
  );
}
