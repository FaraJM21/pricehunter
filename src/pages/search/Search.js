import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Paginations from "../../components/pagination/Paginations";
import SearchTop from "../../components/searchtop/SearchTop";
import { arr } from "../../data/data";
import cls from "./search.module.scss";
function Search() {
  let item = useLocation();
  let data = arr;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cls.search}>
      <Container>
        <SearchTop item={item} />
        <div className={cls.products}>
          {data.slice(0, 5).map((product, index) => {
            return (
              <div
                className={cls.card}
                key={index}
                style={{
                  borderBottom:
                    index !== 4 ? "1px solid rgba(0, 0, 0, 0.3)" : "",
                }}
              >
                <div className={cls.wrapper}>
                  <img src={product.img} alt="404" />
                  <div className={cls.info}>
                    <h3>{product.title}</h3>

                    <div className={cls.about}>
                      <p>Модель:</p>
                      <Link to={"/about"}>
                        <button>Перейти в товар</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={cls.inner}>
                  <div className={cls.shop}>
                    <h4>Магазин</h4>
                    <ul>
                      <li>{product.shop}</li>
                      <li>{product.shop}</li>
                      <li>{product.shop}</li>
                      <li>ещё</li>
                    </ul>
                  </div>

                  <div className={cls.shop}>
                    <h4>Текущая цена:</h4>
                    <ul>
                      <li>{product.oldPrice} сум</li>
                      <li>Нет в наличии</li>
                      <li>{product.oldPrice} сум</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cls.pagination}>
          <Paginations />
        </div>
      </Container>
    </div>
  );
}

export default Search;
