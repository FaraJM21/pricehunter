import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "antd";
import cls from "../header/header.module.scss";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  let navigate = useNavigate();
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const toggleDrawer = (anchor, open, text) => () => {
    if (text === "Выгодние Предложения") {
      navigate("/products");
    } else if (text === "Предложения") {
      navigate("/sentence");
    } else {
      setState(false);
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      <Box
        sx={{
          width:
            anchor === "top" || anchor === "bottom"
              ? "auto"
              : width <= 360
              ? 274
              : 350,
        }}
        role="presentation"
        style={{ position: "realtive", height: "50vh" }}

        //
      >
        <div className={cls.closer}>
          {" "}
          <CloseOutlined onClick={() => setState(false)} />
        </div>

        <List style={{ height: "100%" }}>
          {[
            "Магазины",
            "Все категории",
            "Выгодние Предложения",
            "Предложения",
            "Расширение браузера",
          ].map((text, index) => (
            <ListItem
              key={index}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                textAlign: "justify",
                alignItems: "flex-start",
                paddingLeft: "50px",
                position: "relative",
                top: "100px",
              }}
            >
              <ListItemButton>
                <ListItemText onClick={toggleDrawer(anchor, false, text)}>
                  {text}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ opacity: "0" }} />
      </Box>

      <Box style={{ position: "realtive", height: "50vh" }}>
        <List style={{ height: "50%" }}>
          <ListItem
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              gap: "30px",
              position: "absolute",
              top: "80%",
            }}
          >
            <ListItemButton
              style={{
                width: "228px",
                height: "50px",
                textAlign: "center",
                background: "#D9D9D9",
                borderRadius: "3rem",
              }}
            >
              <ListItemText>Зарегистрироваться</ListItemText>
            </ListItemButton>
            <ListItemButton
              style={{
                width: "228px",
                height: "50px",
                textAlign: "center",
                background: "none",
                border: "1px solid #000000",
                borderRadius: "3rem",
              }}
            >
              <ListItemText>Войти</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={cls.hamburger} onClick={toggleDrawer(anchor, true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
