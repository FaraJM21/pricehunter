import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { red } from "@mui/material/colors";
import "./style.scss";

const marks = [
  {
    value: 25,
    label: "1M",
  },
  {
    value: 50,
    label: "3M",
  },
  {
    value: 75,
    label: "6M",
  },
  {
    value: 98,
    label: "все время",
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: "100%" }} className="slider">
      <Slider
        aria-label="Custom marks"
        defaultValue={25}
        getAriaValueText={valuetext}
        step={25}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{
          color: red[600],
          height: 10,
          
        }}
      />
    </Box>
  );
}
