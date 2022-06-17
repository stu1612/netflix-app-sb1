// npm
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// files
import { ModalContext } from "../../contexts/ModalContext";
import MediaButtons from "../MediaButtons";
import img from "../../assets/images/jumbotron-bg.jpeg";

export default function MediaItem({ item, data }) {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  const { year, age, time, text, cast, genre, modalImg, title } =
    data.jumbotronItem;

  return (
    <div className="carousel">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close-icon"
        onClick={() => setIsModal(null)}
      />
      <div className="img-wrapper">
        {/* <img src={require(`../assets/images/${modalImg}`)} alt={title} /> */}
        <img src={img} alt={title} />

        <MediaButtons />
        <div className="bg-overlay"></div>
      </div>
      <div className="media-item__shape">
        <div className="media-content">
          <div className="media-content__bio">
            <div className="media-content__information">
              <span className="year">{year}</span>
              <span className="age">{age}</span>
              <span className="time">{time}</span>
              {/* <span className="seasons">9 Seasons</span> */}
            </div>
            <div className="media-content__description">
              <p>{text}</p>
            </div>
          </div>
          <div className="media-content__details">
            <div className="detail">
              <span>Cast:</span>
              <span>{cast}</span>
            </div>
            <div className="detail">
              <span>Genres:</span>
              <span>{genre}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
