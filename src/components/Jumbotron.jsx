// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// files
import img from "../assets/images/jumbotron-logo.png";

export default function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="jumbotron--bio">
        <img src={img} alt="The Batman movie poster" />

        <p>
          When a sadistic serial killer begins murdering key political figures
          in Gotham, Batman is forced to investigate the city's hidden
          corruption and question his family's involvement.
        </p>

        <div className="jumbotron--buttons">
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
