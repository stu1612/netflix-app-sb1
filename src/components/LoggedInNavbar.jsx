// npm
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// files
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "./Navbar";

export default function LoggedInNavbar() {
  // global state
  const { setUID } = useContext(AuthContext);

  // properties
  const navigate = useNavigate();

  // methods
  function onSignOut() {
    setUID(null);
    navigate("/");
  }

  return <Navbar label="Sign out" ctaClick={onSignOut} />;
}
