import React, { Component } from "react";

import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import "./css/style.css";
export default class BaiTapChiaLayout extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header></Header>
        <Slider></Slider>
        <ProductList></ProductList>
        <Footer></Footer>
      </div>
    );
  }
}
