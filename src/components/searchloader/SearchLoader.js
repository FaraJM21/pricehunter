import { Skeleton } from "antd";
import React from "react";
import "./loader.scss";

function SearchLoader() {
  return (
    <div className="searchLoader">
      <Skeleton.Image active />
    </div>
  );
}

export default SearchLoader;
