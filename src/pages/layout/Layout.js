import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Pulse from "../../components/pulse/Pulse";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Pulse />
      <Footer />
    </>
  );
}

export default Layout;
