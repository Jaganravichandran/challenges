var plusMenu = document.querySelectorAll(".plus-icon");
var minusMenu = document.querySelectorAll(".minus-icon");
var paragraph = document.querySelectorAll("p");

for (let i = 0; i < plusMenu.length; i++) {
  plusMenu[i].addEventListener("click", function () {
    plusMenu[i].style.display = "none";
    minusMenu[i].style.display = "block";
    paragraph[i].style.display = "block";
  });
}
for (let i = 0; i < minusMenu.length; i++) {
  minusMenu[i].addEventListener("click", function () {
    plusMenu[i].style.display = "block";
    minusMenu[i].style.display = "none";
    paragraph[i].style.display = "none";
  });
}
