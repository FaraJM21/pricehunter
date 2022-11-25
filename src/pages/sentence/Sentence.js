import { LeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSec from "../../components/products/ProductSec";
import { itemArr } from "../../data/data";
import cls from "../../pages/products/products.module.scss";
import { Container } from "@mui/system";
import { Col, Row } from "antd";
function Sentence() {
  const nums = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(1);
  const arr = itemArr;
  const [windowSize, setWindowSize] = useState(undefined);

  const [spanNum, setSpan] = useState(24);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);

      if (windowSize <= 650) {
        setSpan(24);
      } else {
        setSpan(6);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]); // Empty array ensures that effect is only run on mount

  return (
    <div className={cls.products}>
      <ProductSec />
      <Container >
        <Row id={cls.row}>
          {arr.map((item, index) => {
            return (
              <Col id={cls.col} xs={spanNum} sm={7} md={7} lg={7} xl={6}>
                <div className={cls.card} key={index}>
                  <img src={item.img} alt="404" />
                  <div className={cls.info}>
                    <p className={cls.title}>{item.title}</p>
                    <p className={cls.price}>{item.price} сум</p>
                    <Link to={"/about"}>
                      {" "}
                      <button> Cмотреть детали </button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <div className={cls.bottom}>
          <div className={cls.inner}>
            <LeftOutlined onClick={() => num !== 1 && setNum(num - 1)} />
            {nums.map((number, index) => {
              return (
                <span
                  key={index}
                  style={{
                    background: num === number && "red",
                    color: num === number && "white",
                  }}
                  onClick={() => setNum(number)}
                >
                  {number}
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Sentence;
