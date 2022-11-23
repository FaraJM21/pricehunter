import React, { useEffect, useState } from "react";
import cls from "./carousel.module.scss";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import { arr } from "../../data/data";
import Aos from "aos";
import "aos/dist/aos.css";
function Carousels() {
  const data = arr;
  const [width, setWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(4);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    Aos.init({ duration: 500, delay: 10 });

    if (width <= 900 && width > 650) {
      setNum(3);
    } else if (width <= 650 && width > 550) {
      setNum(2);
    } else if (width <= 550) {
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
    <>
      <Swiper
        slidesPerView={num}
        spaceBetween={30}
        freeMode={width <= 800 ? false : true}
        navigation={width <= 800 ? false : true}
        pagination={width <= 800 ? true : false}
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
                <img
                  src={item.img}
                  alt="404"
                  data-aos={width <= 500 ? "" : "zoom-in"}
                />
                <div className={cls.info}>
                  <p
                    data-aos={width <= 500 ? "" : "fade-right"}
                    className={cls.title}
                  >
                    {item.title}
                  </p>
                  <p
                    data-aos={width <= 500 ? "" : "fade-right"}
                    className={cls.price}
                  >
                    {item.price} сум
                  </p>
                  <Link to={"/about"}>
                    {" "}
                    <button data-aos={width <= 500 ? "" : "fade-up"}>
                      {" "}
                      Cмотреть детали{" "}
                    </button>
                  </Link>
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
