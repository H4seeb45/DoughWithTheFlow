import "../styles/navbar.css";
import React from "react";
import "../styles/productcard.css";
import TopCard from "./TopCard";
import ProductCard from "./ProductCardTemplate";
import Features from "./Features";
import About from "./About";
import "../tailwind.css";
import "./navscript";
import ToDo from "./todo/index";
import Blog from "./Blog";
import "../styles/animations.css";
import lottie from "lottie-web";
import ReactIcon from "../assets/anims/reacticon.json";
import "../styles/normalise.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { mobileMenu, closeMenu } from "./navscript";
export default function NavBar () {
  React.useEffect(() => {
    lottie.loadAnimation({
        loop: true,
        autoplay:true,
      container: document.querySelector("#react-logo"),
      animationData: ReactIcon
    });
  }, []);
    return (
      <Router>
        <header className="header">
        
          <nav className="navbar sticky">
          <div id="react-logo"  className="reactlogo"></div>
            <Link
              to="/"
              className="nav-logo p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 text-gray-800"
            >
            
              Portfolio Home
            </Link>
            <ul className="nav-menu">
              <li className="nav-item  tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md hover:bg-blue-500 ">
                <Link to="/Features" class="tansition duration-500 ease-in-out p-4 text-lg text-blue-600 hover:text-white">
                  Features
                </Link>
              </li>
              <li className="nav-item tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow hover:bg-blue-500 rounded-md">
                <Link to="/Blog" class="tansition duration-500 ease-in-out p-4 text-lg text-blue-600 hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="nav-item tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md hover:bg-blue-500">
                <Link to="/About" class="tansition duration-500 ease-in-out p-4 text-lg text-blue-600 hover:text-white">
                  About
                </Link>
              </li>
              <li className="nav-item tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md hover:bg-blue-500">
                <Link to="/ToDo" class="tansition duration-500 ease-in-out p-4 text-lg text-blue-600 hover:text-white">
                  Todo List
                </Link>
              </li>
            </ul>
            <div className="hamburger border border-black py-1 px-2">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
        <span className="block w-xl h-1 mx-auto my-auto bg-blue-600"></span>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Features">
            <Features />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/ToDo">
            <ToDo />
          </Route>
        </Switch>
      </Router>
    );
  }


function Home() {
  return (
    <div className="p-4 homebody">
      <TopCard></TopCard>
      <div className="grid-container">
        <div className="grid-item">
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
}


