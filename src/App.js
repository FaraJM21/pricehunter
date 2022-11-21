import React from "react";
import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Products, Search } from "./pages";
import Sentence from "./pages/sentence/Sentence";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sentence" element={<Sentence />} />
            <Route path="search/:item" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
