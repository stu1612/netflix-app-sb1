// npm
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

// files
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/images/netflix-logo-png-2562.png";
import onScroll from "../scripts/onScroll";
import user from "../assets/images/netflix-avatar.png";
import data from "../data/navigation.json";

export default function Navbar() {
  // global state
  const { logout } = useContext(AuthContext);
  // local state
  const [isScrolled, setIsScrolled] = useState(false);

  // methods
  onScroll(setIsScrolled);

  // properties
  const navigate = useNavigate();

  // components
  const navItems = data.map((item) => <span key={item.id}>{item.title}</span>);

  return (
    <nav className={isScrolled ? "navbar active" : "navbar"}>
      <div className="navbar--container">
        <div className="navbar--container__left">
          <img src={logo} alt="netflix logo" onClick={() => navigate("/")} />
          <div className="desktop-navigation">{navItems}</div>
        </div>
        <div className="navbar--container__right">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
          <FontAwesomeIcon icon={faBell} className="nav-icon" />
          <div className="dropdown">
            <img src={user} alt="netflix user avatar" />
            <div className="options">
              <span>settings</span>
              <span onClick={logout}>logout</span>
              <div className="mobile-navigation">{navItems}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
