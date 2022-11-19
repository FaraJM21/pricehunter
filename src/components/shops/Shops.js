import React from "react";
import { arr } from "../../data/data";
import './shops.scss'

function Shops() {
  const data = arr;
  return (
    <div className="shops">
      <div className="shop-title">Топ магазины</div>
      <div className="shop-cards">
        {data.map((item, index) => {
          return (
            <div className="shop-card" key={index}>
              <img src={item.img} alt="404" />
              <div className="card-title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shops;
