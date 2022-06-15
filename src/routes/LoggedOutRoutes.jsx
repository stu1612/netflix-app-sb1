// npm
import { Routes, Route } from "react-router-dom";
import LoggedOutNavbar from "../components/navigation/LoggedOutNavbar";

// files
import Error404 from "../pages/Error404";
import RecoverPassword from "../pages/LoggedOut/RecoverPassword";
import Registration from "../pages/LoggedOut/Registration";
import SignIn from "../pages/LoggedOut/SignIn";
import SignUp from "../pages/LoggedOut/SignUp";
import Welcome from "../pages/LoggedOut/Welcome";

export default function LoggedOutRoutes() {
  return (
    <div>
      <LoggedOutNavbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="signup/registration" element={<Registration />} />
        <Route path="signup/regform" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="login-help" element={<RecoverPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
