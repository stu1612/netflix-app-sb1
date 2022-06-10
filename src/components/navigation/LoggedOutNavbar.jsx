// npm
import { useNavigate } from "react-router-dom";

// files
import logo from "../../assets/images/netflix-logo-png-2562.png";

export default function Nav() {
  // properties
  const navigate = useNavigate();

  // methods
  function onLogin() {
    navigate("/login");
  }

  function returnHome() {
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <div className="navbar--container__left">
          <div className="navbar-logo">
            <img src={logo} alt="netflix logo" onClick={returnHome} />
          </div>
        </div>
        <div className="navbar-container__right">
          <button className="cta-red" onClick={onLogin}>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}
