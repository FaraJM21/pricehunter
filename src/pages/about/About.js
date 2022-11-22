import React, { useEffect, useState } from "react";
import cls from "./about.module.scss";
import { AboutInputs, AboutTop, Offer, AboutBottom } from "../../components";

function About() {
  const [details, setDetails] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cls.about}>
      <AboutTop />

      <Offer />

      <div className={cls.filters}>
        <div className={cls.btns}>
          <button
            className={cls.btn1}
            onClick={() => setDetails(false)}
            style={{
              background: details ? "" : "#dd0e1d",
              color: details ? "" : "white",
            }}
          >
            Отслеживание цен
          </button>
          <button
            className={cls.btn2}
            onClick={() => setDetails(true)}
            style={{
              background: details ? "#dd0e1d" : "",
              color: details ? "white" : "",
            }}
          >
            Детали товара
          </button>
        </div>

        <AboutInputs details={details} />
        <AboutBottom details={details} />

        <div
          className={cls.details}
          style={{ display: details ? "block" : "none" }}
        >
          <h3>Детали товара</h3>
          <div className={cls.list}>
            <ul>
              <li>Категория</li>
              <li>Производитель</li>
              <li>Модель</li>
              <li>Цена</li>
              <li>Последнее сканирование</li>
            </ul>
            <ul>
              <li>Ноутбуки</li>
              <li>Asus</li>
              <li>AP-1515H</li>
              <li>3.620.000 сум</li>
              <li>2 часа назад</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
