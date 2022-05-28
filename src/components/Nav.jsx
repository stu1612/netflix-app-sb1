// npm
import { useNavigate } from "react-router-dom";

// files
import logo from "../assets/images/netflix-logo-png-2562.png";

export default function Nav() {
  // properties
  const navigate = useNavigate();

  // methods
  function onLogin() {
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content w-100">
          <div className="navbar-logo">
            <img src={logo} alt="netflix logo" />
          </div>
          <div className="navbar-cta">
            <button className="cta-red" onClick={onLogin}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
