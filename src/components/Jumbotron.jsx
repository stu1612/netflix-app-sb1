// npm
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// files
import { Link } from "react-router-dom";
import { ModalContext } from "../contexts/ModalContext";
import data from "../data/jumbotron.json";
import CarouselItem from "./carousel/CarouselItem";

export default function Jumbotron() {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { jumbotronItem } = data;
  const [movieItem] = useState(jumbotronItem);

  return (
    <section id="jumbotron">
      <div className="bio">
        <img
          src={require(`../assets/images/${jumbotronItem.logo}`)}
          alt={jumbotronItem.title}
        />
        <p>{jumbotronItem.text}</p>
        <div className="buttons">
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
            onClick={() => setIsModal(<CarouselItem data={data} />)}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
}
