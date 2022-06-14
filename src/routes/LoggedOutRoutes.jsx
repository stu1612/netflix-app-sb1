// npm
import { Routes, Route } from "react-router-dom";
import LoggedOutNavbar from "../components/navigation/LoggedOutNavbar";

// files
import Welcome from "../pages/LoggedOut/Welcome";
import Login from "../pages/LoggedOut/Login";
import RecoverPassword from "../pages/LoggedOut/RecoverPassword";
import Registration from "../pages/LoggedOut/Registration";
import SignUp from "../pages/LoggedOut/SignUp";
import Error404 from "../pages/Error404";

export default function LoggedOutRoutes() {
  return (
    <div>
      <LoggedOutNavbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="signup/registration" element={<Registration />} />
        <Route path="signup/regform" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="login-help" element={<RecoverPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
