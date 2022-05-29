//npm
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// files
import { Pagination, Navigation } from "swiper";
import CarouselItem from "./CarouselItem";

export default function Carousel({ movies }) {
  // components
  const mappedItems =
    movies &&
    movies.map((item) => (
      <SwiperSlide key={item.id}>
        <CarouselItem item={item} />
      </SwiperSlide>
    ));

  return (
    <div className="carousel">
      <h2>Blockbuster Movies</h2>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {mappedItems}
      </Swiper>
    </div>
  );
}
