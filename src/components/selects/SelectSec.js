import { Select } from "antd";
import React from "react";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectSec = () => (
  <>
    <Select
      
      defaultValue="Все категории"
      bordered={false}
      style={{
        width: 140,
     
      }}
      onChange={handleChange}
      options={[
        {
          value: "телефон",
          label: "Телефон",
        },
        {
          value: "ноутбук",
          label: "Ноутбук",
        },
        {
          value: "телевизор",
          label: "Телевизор",
        },
        {
          value: "смартфон",
          label: "Смартфон",
        },
      ]}
    />
  </>
);
export default SelectSec;
