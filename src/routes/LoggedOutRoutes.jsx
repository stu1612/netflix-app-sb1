// npm
import { Routes, Route } from "react-router-dom";
import LoggedOutNavbar from "../components/LoggedOutNavbar";
import Nav from "../components/Nav";

// files
import Landing from "../pages/LoggedOut/Landing";
import Login from "../pages/LoggedOut/Login";
import RecoverPassword from "../pages/LoggedOut/RecoverPassword";
import Registration from "../pages/LoggedOut/Registration";
import SignUp from "../pages/LoggedOut/SignUp";

export default function LoggedOutRoutes() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signup/registration" element={<Registration />} />
        <Route path="signup/regform" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="LoginHelp" element={<RecoverPassword />} />
      </Routes>
    </div>
  );
}
