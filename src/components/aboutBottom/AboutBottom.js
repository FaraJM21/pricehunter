import React from "react";
import { RadioButtons, Charts, Slider } from "..";

import cls from "./style.module.scss";
function AboutBottom(props) {
  return (
    <div
      className={cls.aboutBottom}
      style={{ display: props.details ? "none" : "flex" }}
    >
      <h3>История цены</h3>

      <div className={cls.container}>
        <div className={cls.chart} style={{ width: "65%" }}>
          <Charts />
        </div>

        <div className={cls.range}>
          <h3>Временной диапазон</h3>
          <Slider />

          <div className={cls.price}>
            <div className={cls.checkbox}>
              <h3>Цены</h3>
              <RadioButtons />
            </div>
          </div>

          <button>Смотреть на alifshop</button>
        </div>
      </div>
    </div>
  );
}

export default AboutBottom;
