import React, { useState } from "react";

function ProductSec() {
  const [btn, setBtn] = useState(1);
  return (
    <div className="products">
      <h3 className="product-title">Лучшее падение цен</h3>
      <div className="btns">
        <div className="btn container">
          <button
            className="btn1"
            style={{
              background: btn === 1 ? "#dd0e1d" : "",
              color: btn === 1 ? "white" : "",
            }}
            onClick={() => setBtn(1)}
          >
            Самые последние
          </button>
          <button
            className="btn2"
            style={{
              background: btn === 2 ? "#dd0e1d" : "",
              color: btn === 2 ? "white" : "",
            }}
            onClick={() => setBtn(2)}
          >
            Лучшие ежедневные
          </button>
          <button
            className="btn3"
            style={{
              background: btn === 3 ? "#dd0e1d" : "",
              color: btn === 3 ? "white" : "",
            }}
            onClick={() => setBtn(3)}
          >
            Лучшие еженедельные
          </button>
        </div>

        <select name="productselect">
          <option defaultValue>Все категории</option>
          <option value="телефон">Телефон</option>
          <option value="ноутбук">Ноутбук</option>
          <option value="телевизор">Телевизор</option>
          <option value="смартфон">Смартфон</option>
        </select>
      </div>
    </div>
  );
}

export default ProductSec;
