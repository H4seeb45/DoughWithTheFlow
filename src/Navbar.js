import "./navbar.css";
import React from "react";
// import "./navscript.js";
export default class NavBar extends React.Component {
  render() {
    return (
      <header class="header">
        <nav class="navbar">
          <a href="#" class="nav-logo">
            WebDev.
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
        <script src="./navscript.js" type="text/javascript"></script>
      </header>
    );
  }
}
