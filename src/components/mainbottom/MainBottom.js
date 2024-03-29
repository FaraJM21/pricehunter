import React, { useEffect, useState } from "react";
import cls from "./mainbottom.module.scss";
import apple from "../../assets/Apple svg.svg";
import gplay from "../../assets/[CITYPNG.COM]PNG White Google Play PlayStore Logo Symbol Icon - 512x512.png";
import saly from "../../assets/Saly-24.png";
import { Container } from "@mui/system";
import { Skeleton } from "antd";
function MainBottom() {
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Container>
      <div
        className={cls.bottom}
        style={{ display: width <= 820 ? "none" : "flex" }}
      >
        <div className={cls.stores}>
          <h3>Выгодные предложения всегда рядом </h3>
          <p>
            Узнавайте первыми о выгодных предложениях в приложении Price Hunter
          </p>
          <div className={cls.card}>
            <div className={cls.store}>
              <div className={cls.picture}>
                <img src={apple} alt="404" width={31} height={38} />
              </div>
              <div className={cls.title}>
                <p> Загрузите в </p>

                <h5> App Store</h5>
              </div>
            </div>

            <div className={cls.store}>
              <div className={cls.picture}>
                <img src={gplay} alt="404" width={32} height={38} />
              </div>
              <div className={cls.title}>
                <p> Доступно в </p>

                <h5> Google Play</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={cls.img}>
          {!loading && (
            <Skeleton.Image
              active
              style={{ width: "237px", height: "350px" }}
            />
          )}
          <img
            src={saly}
            alt="404"
            style={{ display: loading ? "block" : "none" }}
            onLoad={() => setLoading(true)}
          />
        </div>

        <div className={cls.qr_code}>
          <div className={cls.qrImg}></div>
          <h4>Наведи камеру на QR код чтобы скачать приложение</h4>
        </div>
      </div>
    </Container>
  );
}

export default MainBottom;
