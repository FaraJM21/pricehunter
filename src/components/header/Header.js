import { FiSearch } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/pricehunter logo 1.svg";
import logo2 from "../../assets/pricehunter logo 2.svg";
import logo3 from "../../assets/logo3.svg";
import Selects from "../selects/Selects";
import SelectSec from "../selects/SelectSec";
import cls from "./header.module.scss";
import TemporaryDrawer from "../temporarydrawer/TemporaryDrawer";
import { Container } from "@mui/material";
import user from "../../assets/user.svg";
function Header() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  let rus = /[А-з]/gi;
  let eng = /[A-z]/gi;
  let navigate = useNavigate();
  const [scroll, setScroll] = useState("");

  const controlNavbar = () => {
    if (window.scrollY > 10) {
      setScroll("rgba(0, 0, 0, 0.24) 0px 3px 8px");
      setColor(" hsla(0, 0%, 97%, 0.949)");
    } else if (window.scrollY === 0) {
      setScroll("");
      setColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleDown = (e) => {
    if ((value.match(eng) || value.match(rus)) && e.key === "Enter") {
      setValue(e.target.value);
      navigate(`/search/${value}`, { state: value });
      setValue("");
    }
  };

  const handleClick = () => {
    if (value.match(eng) || value.match(rus)) {
      navigate(`/search/${value}`, { state: value });
      setValue("");
    }
  };
  return (
    <header
      className={cls.header}
      style={{ boxShadow: scroll, transition: "0.1s", background: color }}
    >
      <Container>
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
                placeholder = "Поиск..."
                onChange={(e) => setValue(e.target.value)}
              />
              <div className={cls.searchIcon}>
                <FiSearch onClick={handleClick} />
              </div>
            </div>
          </div>

          <div className={cls.wrapper}>
            <Selects />
            <SelectSec />

            <Link to={"products"}>Выгодние Предложения</Link>
            <Link to={"/offer"}>Предложения</Link>

            <img src={user} alt="404" />
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
