import { LeftOutlined } from "@ant-design/icons";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import cls from "./pagination.module.scss";
function Paginations() {
  const arr = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(1);
  return (
    <Container>
      <div className={cls.pagination}>
        <LeftOutlined onClick={() => num !== 1 && setNum(num - 1)} />
        {arr.map((number, index) => {
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
    </Container>
  );
}

export default Paginations;
