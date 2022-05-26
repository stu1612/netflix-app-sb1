// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// files
import img from "../assets/images/squid-games.jpeg";
import logo from "../assets/images/squid-game-logo.png";

export default function Landing() {
  return (
    <div className="hero">
      <img src={img} alt="squid games poster" />
      <div className="hero-info">
        <img src={logo} alt="squid game logo" className="hero-image-logo" />

        <div className="hero-buttons">
          <button className="hero-btn play">
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
          </button>
          <button className="hero-btn info">
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
