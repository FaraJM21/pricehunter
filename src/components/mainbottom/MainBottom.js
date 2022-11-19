import React from "react";
import "./mainbottom.scss";
import apple from "../../assets/Apple svg.svg";
import gplay from "../../assets/[CITYPNG.COM]PNG White Google Play PlayStore Logo Symbol Icon - 512x512.png";
import saly from "../../assets/Saly-24.png";
function MainBottom() {
  return (
    <div className="bottom">
      <div className="stores">
        <h3>Выгодные предложения всегда рядом </h3>
        <p>
          Узнавайте первыми о выгодных предложениях в приложении Price Hunter
        </p>
        <div className="stores-card">
          <div className="store">
            <div className="picture">
              <img src={apple} alt="404" width={31} height={38} />
            </div>
            <div className="store-title">
              <p> Загрузите в </p>

              <h5> App Store</h5>
            </div>
          </div>

          <div className="store">
            <div className="picture">
              <img src={gplay} alt="404" width={32} height={38} />
            </div>
            <div className="store-title">
              <p> Доступно в </p>

              <h5> Google Play</h5>
            </div>
          </div>
        </div>
      </div>


      <div className="bottomImg">
        <img src={saly} alt="404" />
      </div>


      <div className="qr_code">
        <div className="qrImg"></div>
        <h4>Наведи камеру на QR код чтобы скачать приложение</h4>
      </div>
    </div>
  );
}

export default MainBottom;
