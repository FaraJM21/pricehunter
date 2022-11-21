import { LeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSec from "../../components/products/ProductSec";
import { itemArr } from "../../data/data";
import cls from "../../pages/products/products.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
function Sentence() {
  const nums = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(1);
  const arr = itemArr;

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 3000, delay: 10 });
  }, []);
  return (
    <div className={cls.products}>
      <ProductSec />

      <div className={cls.wrapper}>
        {arr.map((item, index) => {
          return (
            <div className={cls.card} key={index}>
              <img
                src={item.img}
                alt="404"
                data-aos="zoom-in"
                data-aos-anchor=".other-element"
              />
              <div className={cls.info}>
                <p
                  data-aos="fade-right"
                  data-aos-anchor=".other-element"
                  className={cls.title}
                >
                  {item.title}
                </p>
                <p
                  data-aos="fade-right"
                  data-aos-anchor=".other-element"
                  className={cls.price}
                >
                  {item.price} сум
                </p>
                <Link to={"/about"}>
                  {" "}
                  <button data-aos="fade-up" data-aos-anchor=".other-element">
                    {" "}
                    Cмотреть детали{" "}
                  </button>
                </Link>
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

export default Sentence;
