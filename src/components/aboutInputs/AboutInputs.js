import React from "react";
import cls from "./style.module.scss";
function AboutInputs(props) {
  return (
    <div
      className={cls.inputs}
      style={{ display: props.details ? "none" : "flex" }}
    >
      <label>
        Мы отправим уведомление на почту:
        <input type="email" name="email" id={cls.email} />
      </label>

      <label>
        Магазин
        <select name="shops" id="shop">
          <option defaultValue>Магазины</option>
          <option value="alishop">Alishop</option>
          <option value="mediapark">Mediapark</option>
          <option value="karzinka">Karzinka</option>
          <option value="havas">Havas</option>
        </select>
      </label>

      <label>
        Снизиться до
        <div className={cls.input}>
          <span>сум</span>
          <input type="text" />
          <button>Отслеживать</button>
        </div>
      </label>
    </div>
  );
}

export default AboutInputs;
