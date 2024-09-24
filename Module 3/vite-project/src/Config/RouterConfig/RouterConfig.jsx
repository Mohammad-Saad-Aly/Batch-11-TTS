import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../Screens/Home/Home";
import { About } from "../../Screens/About/About";
import { Contact } from "../../Screens/Contact/Contact";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Products } from "../../Screens/Products/Products";
import { SingleProduct } from "../../Screens/SingleProduct/SingleProduct";

export default function RouterConfig() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
