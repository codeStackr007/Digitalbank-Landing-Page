"use strict";

// elements
const nav = document.querySelector(".header");
const navHamToggle = document.querySelector(".header__toggle");
const overlay = document.querySelector(".header__overlay");
const navItem = document.querySelectorAll(".header__nav-item");

// helper func
const closeNav = () => nav.classList.remove("nav-is-open");

// listeners
navHamToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-is-open");
});

overlay.addEventListener("click", () => {
  closeNav();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
  }
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    closeNav();
  });
}
