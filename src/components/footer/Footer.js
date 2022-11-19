import React from "react";
import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="documents">
          <h3>Документы</h3>
          <ul>
            <li>Политика конфиденциальности</li>
            <li>Публичная оферта</li>
          </ul>
        </div>
        <div className="documents">
          <h3>Сервис</h3>
          <ul>
            <li>О нас</li>
            <li>Сотрудничество</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
