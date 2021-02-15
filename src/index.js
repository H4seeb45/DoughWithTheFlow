import React from "react";
import ReactDOM from "react-dom";
import "./productcard.css";
import TopCard from "./TopCard";
import ProductCard from "./ProductCards";

function App() {
  return (
    <div>
      <TopCard></TopCard>
      <div class="grid-container">
           <div class="grid-item">
      <ProductCard></ProductCard>
           </div>
           <div class="grid-item">
      <ProductCard></ProductCard>
           </div>
           <div class="grid-item">
      <ProductCard></ProductCard>
           </div>
      </div>
      </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
