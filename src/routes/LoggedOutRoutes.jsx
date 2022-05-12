// npm
import { Routes, Route } from "react-router-dom";

// files
import Landing from "../pages/LoggedOut/Landing";
import Login from "../pages/LoggedOut/Login";
import RecoverPassword from "../pages/LoggedOut/RecoverPassword";
import SignUp from "../pages/LoggedOut/SignUp";

export default function LoggedOutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="recover-password" element={<RecoverPassword />} />
    </Routes>
  );
}
