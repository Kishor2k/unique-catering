
AOS.init({
  duration: 2000,
  offset: 250,
});
window.addEventListener("scroll", () => {
  const container = document.querySelector("#header .container");
  container.classList.toggle("sticky", window.scrollY > 50);
});

const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");

  ul.classList.toggle("open");
  li.forEach((li) => {
    li.classList.toggle("open");
  });
});
