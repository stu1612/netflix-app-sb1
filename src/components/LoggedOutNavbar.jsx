import { useNavigate } from "react-router-dom";

// files
import Navbar from "./Navbar";

export default function LoggedOutNavbar() {
  // properties
  const navigate = useNavigate();

  // methods
  function onLogin() {
    navigate("/login");
  }
  return <Navbar label="Sign in" ctaClick={onLogin} />;
}
