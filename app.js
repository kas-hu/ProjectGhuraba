// Bismillahi Rahmani Raheem
// Navigation toggle Start ⬇

const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const cancel = document.querySelector(".cancel");

menu.addEventListener("click", () => {
  nav.classList.add("active");
});

cancel.addEventListener("click", () => {
  nav.classList.remove("active");
});
// Navigation toggle End ⬆
// Alhamdulillah!
