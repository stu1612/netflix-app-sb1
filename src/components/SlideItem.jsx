// npm
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faAdd } from "@fortawesome/free-solid-svg-icons";

// files
import img from "../assets/images/community.jpg";

export default function SlideItem({ item }) {
  const { thumbnail } = item;
  // local state
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="slide-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={thumbnail} alt="community" />
      {isHovered && (
        <>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=FzWG8jiw4XM"
            className="video"
            playing={true}
            loop={true}
            muted={true}
          />
          <div className="slide-info">
            <div className="slide-icons">
              <FontAwesomeIcon icon={faPlay} className="slide-icon" />
              <FontAwesomeIcon icon={faHeart} className="slide-icon" />
              <FontAwesomeIcon icon={faAdd} className="slide-icon" />
            </div>
            <div className="slide-content">
              <span className="age-restriction">+18</span>
              <span className="released">2005</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
