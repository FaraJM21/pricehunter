import React, { useEffect, useState } from "react";
import { itemArr, shopArr } from "../../data/data";
import cls from "./about.module.scss";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineHeart,
} from "react-icons/ai";
import Charts from "../../components/chart/Chart";
import { Slider } from "../../components";
import RadioButtons from "../../components/radio/RadioButton";
function About() {
  const data = itemArr;
  const shopItem = shopArr;
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={cls.about}>
      <div className={cls.top}>
        {data.slice(0, 1).map((item, index) => {
          return (
            <div className={cls.card} key={index}>
              <div className={cls.wrapper}>
                <img src={item.img} alt="404" />
                <div className={cls.info}>
                  <h3>{item.title}</h3>

                  <div className={cls.about}>
                    <div className={cls.category}>
                      <p>Главная</p>
                      <p>Категория</p>
                      <p>Модель</p>
                    </div>
                    <h4 className={cls.text}>
                      Подпишитесь на уведомления о снижении цен и начните
                      отслеживать этот продукт, заполнив форму ниже.
                    </h4>
                  </div>
                </div>
              </div>

              <div className={cls.inner}>
                <div className={cls.price}>
                  <span>
                    <AiOutlineHeart />
                  </span>
                  <h4>{item.price} сум</h4>
                  <p>{item.shop}</p>
                  <p>16.08.2022 13:43</p>
                </div>
                <button>Перейти в товар</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cls.offer}>
        <h3>4 других предложения</h3>
        <div className={cls.catalogue}>
          <p>Продавец</p>
          <p>Категория</p>
          <p>Цена</p>
          <p>Дата обновления</p>
        </div>

        <div className={cls.items}>
          {show
            ? shopItem.map((item, index) => {
                return (
                  <div className={cls.item} key={index}>
                    <p>{item.title}</p>

                    <p>{item.category}</p>

                    <p>{item.price}</p>

                    <p>{item.date}</p>

                    <button>Перейти в Mediapark</button>
                  </div>
                );
              })
            : shopItem.slice(0, 3).map((item, index) => {
                return (
                  <div className={cls.item} key={index}>
                    <p>{item.title}</p>

                    <p>{item.category}</p>

                    <p>{item.price}</p>

                    <p>{item.date}</p>

                    <button>Перейти в Mediapark</button>
                  </div>
                );
              })}
        </div>

        <div className={cls.show} onClick={() => setShow(!show)}>
          {show ? (
            <h4>
              Скрыть{" "}
              <span>
                <AiOutlineArrowUp />
              </span>
            </h4>
          ) : (
            <h4>
              Показать ещё{" "}
              <span>
                <AiOutlineArrowDown />
              </span>
            </h4>
          )}
        </div>
      </div>

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

        <div
          className={cls.inputs}
          style={{ display: details ? "none" : "flex" }}
        >
          <label>
            Мы отправим уведомление на почту:
            <input type="email" name="email" id={cls.email} />
          </label>

          <label>
            Магазин
            <select name="shops" id="shop">
              <option defaultValue>Магазины</option>
              <option value="alishop">Alishop</option>
              <option value="mediapark">Mediapark</option>
              <option value="karzinka">Karzinka</option>
              <option value="havas">Havas</option>
            </select>
          </label>

          <label>
            Снизиться до
            <div className={cls.input}>
              <span>сум</span>
              <input type="text" />
              <button>Отслеживать</button>
            </div>
          </label>
        </div>

        <div className={cls.aboutBottom}   style={{ display: details ? "none" : "flex" }}>
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
      </div>
    </div>
  );
}

export default About;
