import React from "react";
import { Column } from "@ant-design/plots";

const Charts = () => {
  const data = [
    {
      type: "Cola",
      sales: 140,
    },
    {
      type: "Fanta",
      sales: 100,
    },
    {
      type: "Sprite",
      sales: 65,
    },
    {
      type: "7-UP",
      sales: 130,
    },
    {
      type: "8-UP",
      sales: 48,
    },
    {
      type: "9-UP",
      sales: 38,
    },
    {
      type: "10-UP",
      sales: 88,
    },
    {
      type: "UP",
      sales: 78,
    },
    {
      type: "123-UP",
      sales: 130,
    },
    {
      type: "132-UP",
      sales: 48,
    },
    {
      type: "1231-UP",
      sales: 32,
    },
    {
      type: "24UP",
      sales: 88,
    },
    {
      type: "32-UP",
      sales: 78,
    },

    {
      type: "67UP",
      sales: 88,
    },
    {
      type: "23-UP",
      sales: 78,
    },
    {
      type: "2123UP",
      sales: 88,
    },
    {
      type: "3124-UP",
      sales: 78,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    maxColumnWidth: 32,

    color: ({ type }) => {
      if (type === "Cola" || type === "9-UP" || type === "123-UP") {
        return "dark";
      }
      return "silver";
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: "top",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "dark",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },

    meta: {
      type: {
        alias: "Tel",
      },
      sales: {
        alias: "Bazar",
      },
    },
  };

  return <Column {...config} />;
};

export default Charts;
