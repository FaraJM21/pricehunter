import React from "react";
import { Link } from "react-router-dom";
import cls from "./style.module.scss";
function NoPage() {
  return (
    <div className={cls.nopage}>

      <lottie-player
        src="https://assets3.lottiefiles.com/datafiles/sPJTLSWjrBGgvJK/data.json"
        background="transparent"
        speed="1"
        id={cls.animation}
        loop
        autoplay
      ></lottie-player>

          <Link to={'/'}> <button>Home</button> </Link>
    </div>
  );
}

export default NoPage;
