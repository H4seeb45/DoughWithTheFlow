import React from "react";
import ReactDOM from "react-dom";
import "./styles/productcard.css";
import "./tailwind.css";
import NavBar from "./components/Navbar.js";
import { Provider } from 'react-redux'
import { store } from './components/todo/redux/storeConfig/store'


function App() {
  return <NavBar></NavBar>;
}

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.querySelector("#app"));
