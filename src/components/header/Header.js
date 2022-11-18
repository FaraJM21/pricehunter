import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import logo1 from "../../assets/pricehunter logo 1.svg";
import logo2 from "../../assets/pricehunter logo 2.svg";
import Selects from "../selects/Selects";
import SelectSec from "../selects/SelectSec";
import {BsFillPersonFill } from "react-icons/bs";
import "./header.scss";
function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="inner">
          <div className="logo">
            <img src={logo2} alt="404" />
            <img src={logo1} alt="404" />
          </div>
          <div className="search">
            <input type="text" />
            <span>
              <SearchOutlined />
            </span>
          </div>
        </div>

        <div className="wrapper">
          
          <Selects />
          <SelectSec />
          <h4>Предложения</h4>
    
        <span id="icon"><BsFillPersonFill /></span>    
        </div>
      </nav>
    </header>
  );
}

export default Header;
