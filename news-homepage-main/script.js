var navbar = document.querySelector("nav");
var openMenu = document.querySelector("#menu-button");

var closeMenu = document.querySelector("#menu-close");

openMenu.addEventListener("click", function () {
  navbar.classList.add("open");
});
closeMenu.addEventListener("click", function () {
  navbar.classList.remove("open");
});
