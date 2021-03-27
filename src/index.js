import React from "react";
import ReactDOM from "react-dom";
import "./styles/productcard.css";
import "./tailwind.css";
import NavBar from "./components/Navbar.js";


function App() {
  return <NavBar></NavBar>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
