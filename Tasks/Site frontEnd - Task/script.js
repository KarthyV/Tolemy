var menu = document.querySelector(".menu");
var features = document.querySelector(".features");
// const mediaQuery = window.matchMedia("(min-width: 580px)");

// if (mediaQuery.matches) {
//   features.style.display = "flex";
// }

menu.addEventListener("click", function (e) {
  features.style.display == "flex"
    ? (features.style.display = "none")
    : (features.style.display = "flex");
});
