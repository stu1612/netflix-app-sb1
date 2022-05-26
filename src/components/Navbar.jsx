// files
import logo from "../assets/images/netflix-logo-png-2562.png";

export default function Navbar({ label, ctaClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="netflix logo" />
        </div>
        <span>Home</span>
        <span>Series</span>
        <span>Movies</span>
        <span>New and Popular</span>
        <div className="navbar-cta">
          <button className="cta-red" onClick={ctaClick}>
            {label}
          </button>
        </div>
      </div>
    </nav>
  );
}
