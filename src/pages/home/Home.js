import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import CarouselsSecond from "../../components/carouselsecond/CarouselSecond";
import {
  Carousels,
  PaginationCarousel,
  Shops,
  MainBottom,
  Skeletons,
} from "../../components/index";

import "./home.scss";
function Home() {
  const [loading, setLoading] = useState(false);
  const handleLoad = () => {
    setLoading(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main">
      <div className="ads">
        <h3>Мы помогаем сохранить ваши деньги</h3>
        <div className="box">
          <div className="card one">
            {!loading && <Skeletons />}
            <img
              onLoad={handleLoad}
              style={{ display: loading ? "block" : "none" }}
              src="https://techrushi.com/wp-content/uploads/2022/09/iPhone-14-and-iPhone-14-Pro.jpg"
              alt="404"
            />
          </div>
          <div className="cards-group">
            <div className="cards">
            {!loading && <Skeletons />}
              <img
                onLoad={handleLoad}
                style={{ display: loading ? "block" : "none" }}
                src="https://assets-prd.ignimgs.com/2022/06/23/high-end-4k-tv-1655968850923.jpg"
                alt="404"
              />
            </div>
            <div className="cards">
            {!loading && <Skeletons />}
              <img
                onLoad={handleLoad}
                style={{ display: loading ? "block" : "none" }}
                src="https://assets-prd.ignimgs.com/2022/06/23/high-end-4k-tv-1655968850923.jpg"
                alt="404"
              />
            </div>
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
