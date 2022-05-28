// npm
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

// files
import logo from "../assets/images/netflix-logo-png-2562.png";
import user from "../assets/images/netflix-avatar.png";
import onScroll from "../scripts/onScroll";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  // global state
  const { logout } = useContext(AuthContext);
  // local state
  const [isScrolled, setIsScrolled] = useState(false);

  // methods
  onScroll(setIsScrolled);

  return (
    <nav className={isScrolled ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={logo} alt="netflix logo" />
          </div>
          <div className="desktop-navigation">
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
          </div>
        </div>
        <div className="navbar-cta mr-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
          <FontAwesomeIcon icon={faBell} className="nav-icon" />
          <img src={user} alt="netflix user avatar" />
          <div className="dropdown">
            <FontAwesomeIcon icon={faChevronDown} className="nav-icon" />
            <div className="options">
              <span>settings</span>
              <span onClick={logout}>logout</span>
              <div className="mobile-navigation">
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Popular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
