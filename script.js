const nav = document.querySelector(".nav");
console.log(nav);
const closeIcon = document.querySelector(".icon-close");
const hamburger = document.querySelector(".icon-hamburger");
console.log(hamburger);

hamburger.addEventListener("click", function () {
  nav.classList.toggle("active");
  hamburger.classList.toggle("hide");
  closeIcon.classList.toggle("active");
});
closeIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
  hamburger.classList.toggle("hide");
  closeIcon.classList.toggle("active");
});
