import { LeftOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { arr } from "../../data/data";
import cls from "../products/products.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getImg } from "../../redux/ImageReducer";
import { Container } from "@mui/system";
import { Col, Row } from "antd";
import ProductSec from "../../components/products/ProductSec";
import { Skeleton } from "antd";
function Products() {
  const nums = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(1);
  const itemArr = arr;
  const [loading, setLoading] = useState(false);
  const [windowSize, setWindowSize] = useState(undefined);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClick = (item) => {
    dispatch(getImg(item));
    navigate("/about");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]); // Empty array ensures that effect is only run on mount

  return (
    <Container>
      <div className={cls.products}>
        <ProductSec />
        <Row id={cls.row}>
          {itemArr.map((item, index) => {
            return (
              <Col id={cls.col} sm={24} md={12} lg={7} xl={6} key={index}>
                <div className={cls.card}>
                  {!loading && (
                    <Skeleton.Image
                      active
                      style={{ width: "160px", height: "180px" }}
                    />
                  )}
                  <img
                    src={item.img}
                    alt="404"
                    onLoad={() => setLoading(true)}
                    // style={{ dispaly: loading ? "block" : "none" }}
                  />
                  <div className={cls.info}>
                    <p className={cls.title}>{item.title}</p>
                    <p className={cls.price}>{item.price} сум</p>
                    <button onClick={() => handleClick(item.img)}>
                      {" "}
                      Cмотреть детали{" "}
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
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
        </Row>
      </div>
    </Container>
  );
}

export default Products;
