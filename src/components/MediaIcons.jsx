// npm
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// files
import { ModalContext } from "../contexts/ModalContext";

export default function MediaIcons({ item }) {
  // global state
  const { setIsModal } = useContext(ModalContext);

  return (
    <section id="icons">
      <Link
        to={"/watch"}
        className="play"
        state={{ data: item }}
        onClick={() => setIsModal(null)}
      >
        <FontAwesomeIcon icon={faPlay} />
        <span>Play</span>
      </Link>
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="rgb(24,24,24)"
        className="icon"
      />
    </section>
  );
}
