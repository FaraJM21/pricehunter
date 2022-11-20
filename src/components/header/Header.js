import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import logo1 from "../../assets/pricehunter logo 1.svg";
import logo2 from "../../assets/pricehunter logo 2.svg";
import logo3 from "../../assets/logo3.svg";
import Selects from "../selects/Selects";
import SelectSec from "../selects/SelectSec";
import { BsFillPersonFill } from "react-icons/bs";
import cls from "./header.module.scss";
import TemporaryDrawer from "../temporarydrawer/TemporaryDrawer";
function Header() {
  return (
    <header className={cls.header}>
      <nav className={cls.nav}>
        <div className={cls.inner}>
          <TemporaryDrawer />
          <div className={cls.logo}>
            <img src={logo2} alt="404" className={cls.logo_1} />
            <img src={logo1} alt="404" className={cls.logo_1} />
            <img src={logo3} alt="404" className={cls.logo_res} />
          </div>
          <div className={cls.search}>
            <input type={cls.text} />
            <div className={cls.searchIcon}>
              <SearchOutlined />
            </div>
          </div>
        </div>

        <div className={cls.wrapper}>
          <Selects />
          <SelectSec />
          <h4>Предложения</h4>

          <div id={cls.icon}>
            <BsFillPersonFill />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
