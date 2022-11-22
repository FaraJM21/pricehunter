import React, { useEffect } from "react";
import { arr } from "../../data/data";
import cls from "./shops.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Shops() {
  const data = arr;
  useEffect(() => {
    Aos.init({ duration: 500, delay: 10 });
  }, []);

  return (
    <div className={cls.shops}>
      <div className={cls.title}>Топ магазины</div>
      <div className={cls.cards}>
        {data.map((item, index) => {
          return (
            <div className={cls.card} key={index}  data-aos="zoom-out" >
              <img src={item.img} alt="404"/>
              <div className={cls.title} data-aos="fade-right">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shops;
