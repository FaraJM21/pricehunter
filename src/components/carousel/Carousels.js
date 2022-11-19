import React from "react";
import "./carousel.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { arr } from "../../data/data";

function Carousels() {
  const data = arr;

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#DD0E1D",
          // "--swiper-navigation-margin-top": "10px"
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={item.img} alt="404" />
                <div className="info">
                  <p className="card-title">{item.title}</p>
                  <p className="card-price">{item.price} сум</p>
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
