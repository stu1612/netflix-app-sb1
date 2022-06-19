// npm
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

// files
import breakpoints from "../../data/sliderBreakpointSettings.json";
import CarouselItem from "./CarouselItem";

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

export default function Carousel({ movies, title }) {
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
  const mappedItems = movies.map((item) => (
    <CarouselItem key={item.id} item={item} />
  ));

  return (
    <div className="slider-container">
      <h2 className="slider-title">{title}</h2>
      <Slider {...settings}>{mappedItems}</Slider>
    </div>
  );
}
