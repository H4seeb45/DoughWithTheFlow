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
import Blog from "./Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { mobileMenu, closeMenu } from "./navscript";
export default class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <header className="header">
          <nav className="navbar bg-gray-800">
            <Link
              to="/"
              className="nav-logo p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md text-blue-600"
            >
              Portfolio Home
            </Link>
            <ul className="nav-menu">
              <li className="nav-item p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md">
                <Link to="/Features" class="text-lg text-blue-600">
                  Features
                </Link>
              </li>
              <li className="nav-item p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md">
                <Link to="/Blog" class="text-lg text-blue-600">
                  Blog
                </Link>
              </li>
              <li className="nav-item p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md">
                <Link to="/About" class="text-lg text-blue-600">
                  About
                </Link>
              </li>
              <li className="nav-item p-2 tansition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow rounded-md">
                <Link to="/ToDo" class="text-lg text-blue-600">
                  ToDo List
                </Link>
              </li>
            </ul>
            <div className="hamburger">
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
}

function Home() {
  return (
    <div>
      <TopCard></TopCard>
      <div className="grid-container">
        <div className="grid-item">
          <ProductCard></ProductCard>
        </div>
        <div className="grid-item">
          <WorkCard></WorkCard>
        </div>
        <div className="grid-item">
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

// function Blog() {
//   return (
//     <div>
//       <h2>Blog</h2>
//     </div>
//   );
// }

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
