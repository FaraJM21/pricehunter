import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "antd";
import cls from "../header/header.module.scss";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"

      //
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ height: "100%" }}>
        {[
          "Магазины",
          "Все категории",
          "Популярные продукты",
          "Выгодные предложения",
          "Расширение браузера",
        ].map((text) => (
          <ListItem
            key={text}
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
              <ListItemText
                primary={text}
                onClick={toggleDrawer(anchor, false)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider style={{ opacity: "0" }} />

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
            bottom: "0%",
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
