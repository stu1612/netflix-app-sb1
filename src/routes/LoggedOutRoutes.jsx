// npm
import { Routes, Route } from "react-router-dom";

// files
import Landing from "../pages/LoggedOut/Landing";
import Login from "../pages/LoggedOut/Login";
import RecoverPassword from "../pages/LoggedOut/RecoverPassword";
import Registration from "../pages/LoggedOut/Registration";
import ConfirmPassword from "../pages/LoggedOut/ConfirmPassword";

export default function LoggedOutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup/registration" element={<Registration />} />
      <Route path="/signup/regform" element={<ConfirmPassword />} />
      <Route path="login" element={<Login />} />
      <Route path="recover-password" element={<RecoverPassword />} />
    </Routes>
  );
}
