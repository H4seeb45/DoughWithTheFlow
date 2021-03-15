import React from "react";
import ReactDOM from "react-dom";
import "./productcard.css";
import "./tailwind.css";

import NavBar from "./Navbar.js";

function App() {
  return (
    <body>
      <NavBar></NavBar>
    </body>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
