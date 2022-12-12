import { Container } from "@mui/system";
import { Skeleton } from "antd";
import React, { useState } from "react";
import { shopArr } from "../../data/data";
import cls from "./shops.module.scss";
function Shops() {
  const data = shopArr;
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <div className={cls.shops}>
        <div className={cls.title}>Топ магазины</div>
        <div className={cls.cards}>
          {data.map((item, index) => {
            return (
              <div className={cls.card} key={index}>
                {!loading && (
                  <Skeleton.Image
                    active
                    size="small"
                    style={{
                      borderRadius: "50%",
                      height: "90px",
                      width: "100px",
                    }}
                  />
                )}
                <img
                  style={{ display: loading ? "block" : "none" }}
                  src={item.img}
                  alt="404"
                  width={50}
                  height={50}
                  onLoad={() => setLoading(true)}
                />
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
