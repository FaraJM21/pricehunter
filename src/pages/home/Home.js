import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Carousels,
  PaginationCarousel,
  Product,
  ProductSec,
  Shops,
  MainBottom,
} from "../../components/index";

import "./home.scss";
function Home() {
  return (
    <main className="main">
      <h3 className="adTitle">Мы помогаем сохранить ваши деньги</h3>
      <div className="ads">
        <div className="box">
          <div className="card one"></div>
          <div className="cards-group">
            <div className="cards"></div>
            <div className="cards"></div>
          </div>
          <div className="card two">
            <div className="iconBox">
              <BsFillPersonFill />
            </div>

            <div className="text">
              Чтобы получать уведомления о снижении цен на все категории
              товаров, вам необходимо зарегистрироваться
            </div>
            <button>Зарегистрироваться</button>
          </div>
        </div>
      </div>
      <Product />
      <div className="carousel">
        <Carousels />
      </div>
      <ProductSec />
      <div className="carousel">
        <Carousels />
      </div>
      <div className="carousel">
        <h3 className="product-title">Лучшее падение цен</h3>
        <PaginationCarousel />
      </div>
      <Shops />

      <MainBottom />
    </main>
  );
}

export default Home;
