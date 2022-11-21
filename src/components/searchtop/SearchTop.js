import React from "react";
import cls from "./top.module.scss";
function SearchTop(props) {
  return (
    <div className={cls.top}>
      <div className={cls.result}>
        <h3>Результаты поиска:</h3>
        <p>{props.item.state}</p>
      </div>
      <div className={cls.selects}>
        <div className={cls.select}>
          <div className={cls.category}>
            <p>Категории</p>
          </div>
          <select name="product">
            <option defaultValue> Электроника</option>
            <option value="телефон">Телефон</option>
            <option value="ноутбук">Ноутбук</option>
            <option value="телевизор">Телевизор</option>
            <option value="смартфон">Смартфон</option>
          </select>
        </div>

        <div className={cls.select} id={cls.two}>
          <div className={cls.category}>
            {" "}
            <p>Сортировать по</p>
          </div>

          <div className={cls.price}>
            <span>Цены:</span>
            <select name="product">
              <option defaultValue>низкие</option>
              <option value="телефон"> высокие</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTop;
