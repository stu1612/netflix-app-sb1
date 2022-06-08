// npm
import { useContext } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

// files
import { ModalContext } from "../contexts/ModalContext";
import data from "../data/images.json";
import breakpoints from "../data/sliderBreakpointSettings.json";
import MediaItem from "./MediaItem";

// methods
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <BsChevronLeft className="slider-fa-icon previous" size={46} />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <BsChevronRight className="slider-fa-icon next" size={46} />
    </button>
  );
}

export default function MediaSlider() {
  // global state
  const { setIsModal } = useContext(ModalContext);

  // properties
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: breakpoints,
  };

  // components
  const mappedItems = data.map((item) => (
    <div
      key={item.id}
      className="slider"
      onClick={() => setIsModal(<MediaItem />)}
    >
      <img src={require(`../assets/images/${item.img}`)} alt="fdfd" />
    </div>
  ));

  return (
    <div className="slider-container">
      <h2 className="slider-title">Blockbuster movies</h2>
      <Slider {...settings}>{mappedItems}</Slider>
    </div>
  );
}
