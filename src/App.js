import React from "react";
import "./assets/styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Layout,
  Products,
  Search,
  Sentence,
  About,
  NoPage,
} from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/offer" element={<Sentence />} />
            <Route path="search/:item" element={<Search />} />
            
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
