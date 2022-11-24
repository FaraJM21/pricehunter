import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import cls from "./footer.module.scss";

function Footer() {
  const [width, setWidth] = useState("static");
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  return (
    <Container>
      <footer className={cls.footer}  style = {{position: width > 1600 ? "static" : 'absolute'}}>
        <div className={cls.inner}>
          <div className={cls.documents}>
            <h3>Документы</h3>
            <ul>
              <li>Политика конфиденциальности</li>
              <li>Публичная оферта</li>
            </ul>
          </div>
          <div className={cls.documents}>
            <h3>Сервис</h3>
            <ul>
              <li>О нас</li>
              <li>Сотрудничество</li>
            </ul>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
