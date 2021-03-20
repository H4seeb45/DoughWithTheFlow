import "./navbar.css";
import React from "react";
import "./productcard.css";
import TopCard from "./TopCard";
import ProductCard from "./ProductCards";
import WorkCard from "./WorkCard";
import Features from "./Features";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { mobileMenu, closeMenu } from "./navscript";
export default class NavBar extends React.Component {
  ComponentDidMount() {
    require("./navscript");
  }
  // const bar = document.querySelector(".bar");

  render() {
    return (
      <Router>
        <header class="header">
          <nav class="navbar">
            <a href="#" class="nav-logo">
              <Link to="/">SND PRO</Link>
            </a>
            <ul class="nav-menu">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <Link to="/Features">Features</Link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <Link to="/Blog">Blog</Link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <Link to="/About">About</Link>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <Link to="/Contact">Contact</Link>
                </a>
              </li>
            </ul>
            <div class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </nav>
        </header>
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
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return (
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
  );
}

// function Features() {
//   return (
//     <div>
//       <h2>Features</h2>
//     </div>
//   );
// }

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}
