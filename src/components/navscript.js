// const bar = document.querySelector(".bar");
window.onload = function () {
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));
  console.log("Navscript added");
  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};