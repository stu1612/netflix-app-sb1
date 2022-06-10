// npm
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// files
import { ModalContext } from "../contexts/ModalContext";
import data from "../data/jumbotron.json";
import MediaItem from "./MediaItem";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { jumbotronItem } = data;
  const [movieItem] = useState(jumbotronItem);

  return (
    <div className="jumbotron">
      <div className="jumbotron--bio">
        <img
          src={require(`../assets/images/${jumbotronItem.logo}`)}
          alt={jumbotronItem.title}
        />
        <p>{jumbotronItem.text}</p>
        <div className="jumbotron--buttons">
          <Link
            className="hero-btn hero-play"
            to={"/watch"}
            state={{ data: movieItem }}
          >
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
          </Link>
          <button
            className="hero-btn info"
            onClick={() => setIsModal(<MediaItem data={data} />)}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
