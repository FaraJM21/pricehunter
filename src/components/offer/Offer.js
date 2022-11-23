import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { shopArr } from "../../data/data";
import cls from "./style.module.scss";
function Offer() {
  const shopItem = shopArr;
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
                <>
                  <div className={cls.card} index={index}>
                    <div className={cls.left}>
                      <p>Продавец</p>
                      <p>Категория</p>
                      <p>Цена</p>
                      <p>Дата обновления</p>
                    </div>

                    <div className={cls.right}>
                      <p>{item.title}</p>
                      <p>{item.category}</p>
                      <p>{item.price}</p>
                      <p>{item.date}</p>
                    </div>
                    <button>Перейти в Mediapark</button>
                  </div>
                  <div className={cls.item} key={index}>
                    <p>{item.title}</p>

                    <p>{item.category}</p>

                    <p>{item.price}</p>

                    <p>{item.date}</p>

                    <button>Перейти в Mediapark</button>
                  </div>
                </>
              );
            })
          : shopItem.slice(0, 3).map((item, index) => {
              return (
                <>
                  <div className={cls.card} index={index}>
                    <div className={cls.left}>
                      <p>Продавец</p>
                      <p>Категория</p>
                      <p>Цена</p>
                      <p>Дата обновления</p>
                    </div>

                    <div className={cls.right}>
                      <p>{item.title}</p>
                      <p>{item.category}</p>
                      <p>{item.price}</p>
                      <p>{item.date}</p>
                    </div>
                    <button>Перейти в Mediapark</button>
                  </div>
                  <div className={cls.item} key={index}>
                    <p>{item.title}</p>

                    <p>{item.category}</p>

                    <p>{item.price}</p>

                    <p>{item.date}</p>

                    <button>Перейти в Mediapark</button>
                  </div>
                </>
              );
            })}
      </div>

      <div className={cls.btn}>
        <button id={cls.btn} onClick={() => setShow(!show)}>
          {show ? "Скрыть" : "Показать ещё"}
        </button>
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
  );
}

export default Offer;
