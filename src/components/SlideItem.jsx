// npm
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faAdd } from "@fortawesome/free-solid-svg-icons";

// files
import img from "../assets/images/community.jpg";

export default function SlideItem() {
  // local state
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="slide-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="community" />
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
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faAdd} />
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
