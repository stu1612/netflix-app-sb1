// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function MediaIcons() {
  return (
    <section id="icons">
      <button className="play">
        <FontAwesomeIcon icon={faPlay} />
        <span>Play</span>
      </button>
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="rgb(24,24,24)"
        className="icon"
      />
    </section>
  );
}
