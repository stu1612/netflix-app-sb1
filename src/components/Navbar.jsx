// files
import logo from "../assets/images/netflix-logo-png-2562.png";

export default function Navbar({ label, ctaClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="netflix logo" />
        </div>
        <div className="navbar-cta">
          <button className="cta-red" onClick={ctaClick}>
            {label}
          </button>
        </div>
      </div>
    </nav>
  );
}
