import { Container } from "@mui/system";
import React from "react";
import { shopArr } from "../../data/data";
import cls from "./shops.module.scss";
function Shops() {
  const data = shopArr;

  return (
    <Container>
      <div className={cls.shops}>
        <div className={cls.title}>Топ магазины</div>
        <div className={cls.cards}>
          {data.map((item, index) => {
            return (
              <div className={cls.card} key={index}>
                <img src={item.img} alt="404" width={50} height={50} />
                <div className={cls.title}>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Shops;
