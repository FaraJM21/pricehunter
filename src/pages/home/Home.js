import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Carousels,
  PaginationCarousel,
  Product,
  ProductSec,
  Shops,
  MainBottom,
} from "../../components/index";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.scss";
function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setWidth(window.innerWidth);

    Aos.init({ duration: 500, delay: 10 });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main className="main">
      <h3 className="adTitle" data-aos={width <= 500 ? "fade-right" : ''}>
        Мы помогаем сохранить ваши деньги
      </h3>
      <div className="ads">
        <div className="box">
          <div
            className="card one"
            data-aos="fade-up"
            data-aos-anchor=".other-element"
          ></div>
          <div className="cards-group">
            <div
              className="cards"
              data-aos="fade-up"
              data-aos-anchor=".other-element"
            ></div>
            <div
              className="cards"
              data-aos="fade-up"
              data-aos-anchor=".other-element"
            ></div>
          </div>
          <div
            className="card two"
            data-aos="fade-up"
            data-aos-anchor=".other-element"
          >
            <div className="card-box">
              <div className="iconBox">
                <BsFillPersonFill />
              </div>
              <div className="text">
                Чтобы получать уведомления о снижении цен на все категории
                товаров, вам необходимо зарегистрироваться
              </div>
            </div>

            <button>Зарегистрироваться</button>
          </div>
        </div>
      </div>

      <Product />

      <Carousels />

      <ProductSec />

      <Carousels />

      <PaginationCarousel />

      <Shops />

      <MainBottom />
    </main>
  );
}

export default Home;
