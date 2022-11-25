import { Container } from "@mui/system";
import React from "react";
import cls from "./footer.module.scss";

function Footer() {
  return (
    <footer className={cls.footer}>
      <Container>
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
      </Container>
    </footer>
  );
}

export default Footer;
