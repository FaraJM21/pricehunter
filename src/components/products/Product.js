import React, { useState } from "react";

function Product() {
  const [active, setActive] = useState(true);
  
  return (
    <div className="products">
      <h3 className="product-title">Популярные товары</h3>
      <div className="btns">
        <div className="btn">
          <button
            id="btn1"
            onClick={() => setActive(true)}
            style={{
              background: active ? "#dd0e1d" : "",
              color: active ? "white" : "",
            }}
          >
            Все товары
          </button>
          <button
            id="btn2"
            onClick={() => setActive(false)}
            style={{
              background: active ? "" : "#dd0e1d",
              color: active ? "" : "white",
            }}
          >
            По лучшей цене
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

export default Product;
