import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { itemArr } from "../../data/data";
import cls from "./top.module.scss";
import AboutLoading from "../aboutLoading/AboutLoading";
function AboutTop() {
  const data = itemArr;
  const [loading, setLoading] = useState(false);
  const selector = useSelector((state) => state.picture.img);
  console.log(selector);
  return (
    <div className={cls.top}>
      {data.slice(0, 1).map((item, index) => {
        return (
          <div className={cls.card} key={index}>
            {!loading && <AboutLoading/>  }
            <img src={selector} alt="404"  onLoad={()=>setLoading(true)} style ={{display: loading ? 'block' : 'none'}}/>
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
    </div>
  );
}

export default AboutTop;
