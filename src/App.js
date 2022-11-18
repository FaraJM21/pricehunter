import React from "react";
import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Products, Search } from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
