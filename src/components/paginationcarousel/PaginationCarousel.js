import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.scss";
import Aos from "aos";
import "aos/dist/aos.css";
// import required modules
import { Pagination } from "swiper";
import { arr } from "../../data/data";

export default function PaginationCarousel() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    Aos.init({ duration: 3000, delay: 10 });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const data = arr;
  return (
    <div className="carousel">
      <h3 className="product-title">Лучшее падение цен</h3>
      <Swiper
        slidesPerView={width <= 800 ? 1 : 4}
        spaceBetween={width <= 800 ? 60 : 30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="imgbox" data-aos="zoom-in"> 
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
