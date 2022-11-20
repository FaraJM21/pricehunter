import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/pricehunter logo 1.svg";
import logo2 from "../../assets/pricehunter logo 2.svg";
import logo3 from "../../assets/logo3.svg";
import Selects from "../selects/Selects";
import SelectSec from "../selects/SelectSec";
import { BsFillPersonFill } from "react-icons/bs";
import cls from "./header.module.scss";
import TemporaryDrawer from "../temporarydrawer/TemporaryDrawer";
function Header() {
  const [value, setValue] = useState("");
  let rus = /[А-з]/gi;
  let eng = /[A-z]/gi;

  let navigate = useNavigate();

  const handleDown = (e) => {
    if ((value.match(eng) || value.match(rus)) && e.key === "Enter") {
      setValue(e.target.value);
      navigate(`/search/${value}`, { state: value });
    }
  };

  const handleClick = () => {
    if (value.match(eng) || value.match(rus)) {
      navigate(`/search/${value}`, { state: value });
    }
  };
  return (
    <header className={cls.header}>
      <nav className={cls.nav}>
        <div className={cls.inner}>
          <TemporaryDrawer />
          <Link to={"/"}>
            <div className={cls.logo}>
              <img src={logo2} alt="404" className={cls.logo_1} />
              <img src={logo1} alt="404" className={cls.logo_1} />
              <img src={logo3} alt="404" className={cls.logo_res} />
            </div>
          </Link>

          <div className={cls.search}>
            <input
              type={cls.text}
              onKeyDown={(e) => handleDown(e)}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className={cls.searchIcon}>
              <SearchOutlined onClick={handleClick} />
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
