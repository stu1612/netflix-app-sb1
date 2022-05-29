// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faAdd } from "@fortawesome/free-solid-svg-icons";

export default function CarouselItem({ item }) {
  const [movieItem] = useState(item);
  return (
    <div className="slide">
      <img src={item.thumbnail} alt={item.id} />
      <div className="background">
        <p>{item.title}</p>
        <div className="carousel-info">
          <div className="carousel-icons">
            <Link to={"/watch"} state={{ data: movieItem }}>
              <FontAwesomeIcon icon={faPlay} className="slide-icon" />
            </Link>
            <FontAwesomeIcon icon={faHeart} className="slide-icon" />
            <FontAwesomeIcon icon={faAdd} className="slide-icon" />
          </div>
          <div className="carousel-content">
            <span className="age-restriction">{item.age}</span>
            <span className="released">{item.year}</span>
            <span className="released">{item.time}</span>
          </div>
        </div>
        <div className="carousel-description">
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}
