// Wait for the document to load completely
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Smooth scroll to top
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// JavaScript to handle the hamburger menu toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});