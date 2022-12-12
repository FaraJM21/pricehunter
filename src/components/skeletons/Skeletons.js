import { Skeleton } from "antd";
import React from "react";
import './skelton.scss'
function Skeletons() {
  return (
    <div className="firstSkeleton">
      <Skeleton.Image active />
    </div>
  );
}

export default Skeletons;
