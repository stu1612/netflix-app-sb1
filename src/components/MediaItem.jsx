// npm
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// files
import { ModalContext } from "../contexts/ModalContext";
import MediaButtons from "./MediaButtons";
import img from "../assets/images/img7.webp";

export default function MediaItem() {
  // global state
  const { setIsModal } = useContext(ModalContext);
  return (
    <div className="media-item">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close-icon"
        onClick={() => setIsModal(null)}
      />
      <div className="img-wrapper">
        <img src={img} alt="dsad" />
        <MediaButtons />
        <div className="bg-overlay"></div>
      </div>
      <div className="media-item__shape">
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
          <div className="media-content__details">
            <div className="detail">
              <span>Cast:</span>
              <span>Josh Radnor, Jason Segel, Neil Patrick</span>
            </div>
            <div className="detail">
              <span>Genres:</span>
              <span>Romantic, TV Comedy, Sitcoms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
