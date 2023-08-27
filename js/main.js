// ====================loading page============
window.addEventListener("load", (e) => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

// itemNav=================
let itemHead = document.querySelectorAll(".nav-link");
itemHead.forEach((item) => {
  item.addEventListener("click", (e) => {
    itemHead.forEach((item) => {
      item.classList.remove("activeHead");
    });
    item.classList.add("activeHead");
  });
});
// active bar=====================================
var theI = document.querySelector(".fa-bars");
theI.addEventListener("click", (e) => {
  e.target.classList.toggle("fa-close");
});
