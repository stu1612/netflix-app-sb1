// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAdd,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

// files
import img from "../assets/images/img7.webp";

export default function MediaItem() {
  return (
    <div className="media-item">
      <div className="img-wrapper">
        <img src={img} alt="dsad" />
      </div>
      <div className="media-item__shape">
        <div className="media-buttons">
          <button className="play">
            <FontAwesomeIcon icon={faPlay} /> <span>Play</span>
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
        <div className="media-content">
          <div className="media-content__bio">
            <div className="media-content__information">
              <span className="year">2014</span>
              <span className="age">13+</span>
              <span className="seasons">9 Seasons</span>
            </div>
            <div className="media-content__description">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat dignissimos aspernatur recusandae. Quia dolor eius
                laboriosam, reprehenderit omnis nemo rerum quas architecto
                reiciendis quaerat dolorem modi labore, est, corporis ea?
              </p>
            </div>
          </div>
          <div className="media-content__genre">
            <div className="cast">
              <h3>Cast</h3>
              <span>Josh Radnor, Jason Segel, Neil Patrick</span>
            </div>
            <div className="genre">
              <h3>Genres</h3>
              <span>Romantic, TV Comedy, Sitcoms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
