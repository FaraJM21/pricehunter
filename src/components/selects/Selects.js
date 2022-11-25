import { Select } from "antd";
import React from "react";
import cls from "../header/header.module.scss";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selects = () => (
  <Select
    defaultValue="Магазины"
    bordered={false}
    size="small"
    style={{
      width: 110,
    }}
    className={cls.select}
    onChange={handleChange}
    options={[
      {
        value: "alishop",
        label: "Alishop",
      },
      {
        value: "mediapark",
        label: "Mediapark",
      },
      {
        value: "karzinzka",
        label: "Karzinzka",
      },
      {
        value: "havas",
        label: "Havas",
      },
    ]}
  />
);
export default Selects;
