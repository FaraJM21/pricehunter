import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.scss";

// import required modules
import { Pagination } from "swiper";
import { arr } from "../../data/data";
import { Container } from "@mui/system";

export default function PaginationCarousel() {
  const [width, setWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(4);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (width <= 900 && width > 650) {
      setNum(3);
    } else if (width <= 650 && width > 550) {
      setNum(2);
    } else if (width <= 550) {
      setNum(1);
    } else {
      setNum(4);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const data = arr;
  return (
    <Container>
      <h3 className="sale">Лучшее падение цен</h3>
      <Swiper
        slidesPerView={num}
        spaceBetween={30}
        pagination={true}
        modules={[Pagination]}
        className="myswiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="imgbox"
                style={{
                  background: `url(${item.img}) no-repeat center center`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
