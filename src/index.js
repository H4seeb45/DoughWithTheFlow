import React from "react";
import ReactDOM from "react-dom";

import TopCard from "./TopCard";
import ProductCard from "./ProductCards";

function App() {
  return (
    <div>
      <TopCard></TopCard>

      <ProductCard></ProductCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
