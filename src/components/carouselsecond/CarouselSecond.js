import React, { useEffect, useState } from "react";
import cls from "../carousel/carousel.module.scss";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { arr } from "../../data/data";
import { Container } from "@mui/system";

import ProductSec from "../products/ProductSec";

function CarouselsSecond() {
  const data = arr;
  const [width, setWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(4);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    if (width <= 975 && width > 740) {
      setNum(3);
    } else if (width <= 740 && width > 552) {
      setNum(2);
    } else if (width <= 552) {
      setNum(1);
    } else {
      setNum(4);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Container>
      <ProductSec />
      <Swiper
        slidesPerView={num}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        freeMode={width <= 800 ? false : true}
        navigation={width <= 800 ? false : true}
        pagination={width <= 800 ? true : false}
        modules={[Autoplay, FreeMode, Navigation, Pagination]}
        className={cls.myswiper}
        style={{
          "--swiper-navigation-color": "#DD0E1D",
          "--swiper-navigation-size": "30px",
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
                  <Link to={"/about"}>
                    {" "}
                    <button> Cмотреть детали </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

export default CarouselsSecond;
