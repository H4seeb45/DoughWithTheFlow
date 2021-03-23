// const bar = document.querySelector(".bar");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));
console.log("Navscript added");
export function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

export function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
