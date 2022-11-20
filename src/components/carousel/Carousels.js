import React, { useEffect, useState } from "react";
import cls from "./carousel.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import { arr } from "../../data/data";

function Carousels() {
  const data = arr;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Swiper
        slidesPerView={width <= 800? 1 : 4}
        spaceBetween={10}
        freeMode={width <= 800? false : true}
        navigation={width <= 800? false : true}
        pagination={width <= 800? true : false}
        modules={[FreeMode, Navigation, Pagination]}
        id={cls.myswiper}
        style={{
          "--swiper-navigation-color": "#DD0E1D",
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={cls.card}>
                <img src={item.img} alt="404" />
                <div className={cls.info}>
                  <p className={cls.title}>{item.title}</p>
                  <p className={cls.price}>{item.price} сум</p>
                  <button>Cмотреть детали</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousels;
