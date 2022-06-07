// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";

// files
import data from "../data/images.json";

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
      className="btn__custom-slider btn-left"
    >
      <FontAwesomeIcon icon={faChevronLeft} className="fa-icon previous" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
      className="btn__custom-slider btn-next"
    >
      <FontAwesomeIcon icon={faChevronRight} className="fa-icon next" />
    </button>
  );
}

export default function AppSlider() {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const mappedItems = data.map((item) => (
    <div key={item.id} className="item">
      <img src={require(`../assets/images/${item.img}`)} alt="fdfd" />
    </div>
  ));
  return (
    <div>
      <h2 className="slider-title">Blockbuster movies</h2>
      <Slider {...settings}>{mappedItems}</Slider>
    </div>
  );
}
