import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";

// import required modules
import { Pagination } from "swiper";
import { arr } from "../../data/data";

export default function PaginationCarousel() {
  const data = arr;
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="img" src={item.img} alt="404" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
