// npm
import { useContext } from "react";
import { Link } from "react-router-dom";

// files
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/netflix-logo-png-2562.png";

export default function Navbar() {
  // global state
  const { uid, onSignOut } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="netflix logo" />
        </div>
        <div className="navbar-cta">
          {uid ? (
            <button onClick={onSignOut} className="cta-red">
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="cta-red">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
