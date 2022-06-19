// npm
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// files
import { Link } from "react-router-dom";
import { ModalContext } from "../contexts/ModalContext";
import data from "../data/jumbotron.json";
import MediaItem from "../components/media/MediaItem";

export default function Jumbotron() {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { logo, title, text } = data;
  const [movieItem] = useState(data);

  return (
    <section id="jumbotron">
      <div className="bio">
        <img src={require(`../assets/images/${logo}`)} alt={title} />
        <p>{text}</p>
        <div className="buttons">
          <Link
            className="btn btn-hero play"
            to={"/watch"}
            state={{ data: movieItem }}
          >
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
          </Link>
          <button
            className="btn btn-hero info"
            onClick={() => setIsModal(<MediaItem item={data} />)}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}
