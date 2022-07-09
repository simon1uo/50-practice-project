const nav = document.querySelector("#nav");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
