// Wait for the document to load completely
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// JavaScript to handle the hamburger menu toggle
humbr = document.querySelector(".hum");
humbr.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
