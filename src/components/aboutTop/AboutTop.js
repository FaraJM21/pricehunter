import { Container } from "@mui/system";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { itemArr } from "../../data/data";
import cls from "./top.module.scss";
function AboutTop() {
  const data = itemArr;
  return (
    <div className={cls.top}>
      <Container>
        {data.slice(0, 1).map((item, index) => {
          return (
            <div className={cls.card} key={index}>
              <img src={item.img} alt="404" />
              <div className={cls.wrapper}>
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
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default AboutTop;
