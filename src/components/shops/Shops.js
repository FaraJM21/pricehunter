import React from "react";
import { arr } from "../../data/data";
import cls from './shops.module.scss'

function Shops() {
  const data = arr;
  return (
    <div className={cls.shops}>
      <div className={cls.title}>Топ магазины</div>
      <div className={cls.cards}>
        {data.map((item, index) => {
          return (
            <div className={cls.card} key={index}>
              <img src={item.img} alt="404" />
              <div className={cls.title}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shops;
