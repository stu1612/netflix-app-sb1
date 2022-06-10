// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAdd,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

export default function MediaButtons() {
  return (
    <div className="media-buttons">
      <button className="play">
        <FontAwesomeIcon icon={faPlay} />
        <span>Play</span>
      </button>
      <button className="media-icon">
        <FontAwesomeIcon icon={faAdd} color={"white"} />
      </button>
      <button className="media-icon">
        <FontAwesomeIcon icon={faThumbsUp} color={"white"} />
      </button>
      <button className="media-icon">
        <FontAwesomeIcon icon={faThumbsDown} color={"white"} />
      </button>
    </div>
  );
}
