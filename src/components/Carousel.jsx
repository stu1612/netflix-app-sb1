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
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {mappedItems}
      </Swiper>
    </div>
  );
}
