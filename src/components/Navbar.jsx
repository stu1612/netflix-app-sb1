import logo from "../assets/images/netflix-logo-png-2562.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src={logo} alt="netflix logo" />
        </div>
        <div className="navbar-cta">
          <button className="cta-red">Sign in</button>
        </div>
      </div>
    </nav>
  );
}
