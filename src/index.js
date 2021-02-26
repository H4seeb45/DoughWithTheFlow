import React from "react";
import ReactDOM from "react-dom";
import "./productcard.css";
import TopCard from "./TopCard";
import ProductCard from "./ProductCards";
import WorkCard from "./WorkCard";

function App() {
  return (
    <body>
      <div>
        <TopCard></TopCard>
        <div class="grid-container">
          <div class="grid-item">
            <ProductCard></ProductCard>
          </div>
          <div class="grid-item">
            <WorkCard></WorkCard>
          </div>
          <div class="grid-item">
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
    </body>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
