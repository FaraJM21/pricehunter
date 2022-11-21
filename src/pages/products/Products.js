import { LeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";

import { itemArr } from "../../data/data";
import cls from "./products.module.scss";
function Products() {
  const nums = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(1);
  const arr = itemArr;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={cls.products}>
      <Product />

      <div className={cls.wrapper}>
        {arr.map((item, index) => {
          return (
            <div className={cls.card} key={index}>
              <img src={item.img} alt="404" />
              <div className={cls.info}>
                <p className={cls.title}>{item.title}</p>
                <p className={cls.price}>{item.price} сум</p>
                <button>Cмотреть детали</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cls.bottom}>
        <div className={cls.inner}>
          <LeftOutlined onClick={() => num !== 1 && setNum(num - 1)} />
          {nums.map((number, index) => {
            return (
              <span
                key={index}
                style={{
                  background: num === number && "red",
                  color: num === number && "white",
                }}
                onClick={() => setNum(number)}
              >
                {number}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
