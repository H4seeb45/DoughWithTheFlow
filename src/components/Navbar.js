import "../styles/navbar.css";
import React from "react";
import "../styles/productcard.css";
import TopCard from "./TopCard";
import ProductCard from "./ProductCards";
import WorkCard from "./WorkCard";
import Features from "./Features";
import About from "./About";
import "../tailwind.css";
import "./navscript";
import ToDo from "./todolist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { mobileMenu, closeMenu } from "./navscript";
export default class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <header class="header">
          <nav class="navbar">
            <a href="#" class="nav-logo p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow border rounded-md">
              <Link to="/" class="text-blue-600">
                Portfolio Home
              </Link>
            </a>
            <ul class="nav-menu">
              <li class="nav-item p-2 group border-solid border-2 rounded-lg  bg-white shadow-lg hover:border-blue-600">
                <a
                  href="#"
                  class="nav-link text-base transition duration-500 ease-in-out hover:text-indigo-600"
                >
                  <Link to="/Features" activeClassName="bg-purple-300">
                    Features
                  </Link>
                </a>
              </li>
              <li class="nav-item p-2 group border-solid border-2 rounded-lg  bg-white shadow-lg hover:border-blue-600">
                <a
                  href="#"
                  class="nav-link text-base transition duration-500 ease-in-out hover:text-indigo-600"
                >
                  <Link to="/Blog" activeClassName="bg-purple-700">
                    Blog
                  </Link>
                </a>
              </li>
              <li class="nav-item p-2 group border-solid border-2 rounded-lg  bg-white shadow-lg hover:border-blue-600">
                <a
                  href="#"
                  class="nav-link text-base transition duration-500 ease-in-out hover:text-indigo-600"
                >
                  <Link to="/About" activeClassName="bg-purple-700">
                    About
                  </Link>
                </a>
              </li>
              <li class="nav-item p-2 group border-solid border-2 rounded-lg  bg-white shadow-lg hover:border-blue-600">
                <a
                  href="#"
                  class="nav-link text-base transition duration-500 ease-in-out hover:text-indigo-600"
                >
                  <Link to="/Contact">
                    Contact
                  </Link>
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
        <span class="block w-xl h-1 mx-auto my-auto bg-blue-600"></span>
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
            <ToDo />
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

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h2>Contact</h2>
//     </div>
//   );
// }
