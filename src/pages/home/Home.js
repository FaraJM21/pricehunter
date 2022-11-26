import React, { useEffect } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import CarouselsSecond from "../../components/carouselsecond/CarouselSecond";
import {
  Carousels,
  PaginationCarousel,
  Shops,
  MainBottom,
} from "../../components/index";

import "./home.scss";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main">
      <div className="ads">
        <h3>Мы помогаем сохранить ваши деньги</h3>
        <div className="box">
          <div className="card one"></div>
          <div className="cards-group">
            <div className="cards"></div>
            <div className="cards"></div>
          </div>
          <div className="card two">
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

      <Carousels />

      <CarouselsSecond />

      <PaginationCarousel />

      <Shops />

      <MainBottom />
    </main>
  );
}

export default Home;
