const navBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");

navBtn.addEventListener("click", () => {
  navs.forEach((nav) => {
    nav.classList.add("visible");
  });
});

closeBtn.addEventListener("click", () => {
  navs.forEach((nav) => {
    nav.classList.remove("visible");
  });
});
