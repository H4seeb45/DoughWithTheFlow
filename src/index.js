import React from "react";
import ReactDOM from "react-dom";
import "./productcard.css";
import TopCard from "./TopCard";
import ProductCard from "./ProductCards";

function App() {
  return (
    <body>
    <div>
      <TopCard>
      </TopCard>
      <div class="grid-container">
           <div class="grid-item1">
      <ProductCard></ProductCard>
           </div>
           <div class="grid-item2">
      <ProductCard></ProductCard>
           </div>
           <div class="grid-item3">
      <ProductCard></ProductCard>
           </div>
      </div>
      </div>
      </body>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
