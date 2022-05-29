// npm
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// files
import SlideItem from "./SlideItem";

export default function Slider({ movies }) {
  // local state
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(false);
  // properties
  const sliderRef = useRef();
  // methods
  const handleClick = (direction) => {
    setActiveSlide(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      sliderRef.current.style.transform = `translateX(${290 + distance}px)`;
    }
    if (direction === "right" && slideIndex < 5) {
      setSlideIndex(slideIndex + 1);
      sliderRef.current.style.transform = `translateX(${-290 + distance}px)`;
    }
  };

  // componets
  const mappedItems =
    movies && movies.map((item) => <SlideItem key={item.id} item={item} />);
  return (
    <div className="slider">
      <span className="splider-title">Continue watching</span>
      <div className="slider-wrapper">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !activeSlide && "none" }}
        />
        <div className="slider-container" ref={sliderRef}>
          {mappedItems}
          {/* <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem /> */}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
