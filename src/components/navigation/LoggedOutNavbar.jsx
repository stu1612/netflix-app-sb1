// npm
import { useNavigate } from "react-router-dom";

// files
import logo from "../../assets/images/netflix-logo-png-2562.png";

export default function LoggedOutNavbar({ navBg }) {
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
    <nav className={`navbar ${navBg}`}>
      <div className="navbar--container">
        <div className="left">
          <div className="navbar-logo">
            <img src={logo} alt="netflix logo" onClick={returnHome} />
          </div>
        </div>
        <div className="right">
          <button className="btn btn-red btn-reg" onClick={onLogin}>
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}
