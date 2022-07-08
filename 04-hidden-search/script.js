const searchContainer = document.querySelector(".search-container");
const searchBtn = document.querySelector(".btn");
const searchInput = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  searchInput.focus();
});
