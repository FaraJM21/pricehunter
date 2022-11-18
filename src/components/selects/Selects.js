import { Select } from "antd";
import React from "react";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selects = () => (
  <>
    <Select
    
      defaultValue="Магазины"
      bordered={false}
      style={{
        width: 120,
      }}
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
  </>
);
export default Selects;
