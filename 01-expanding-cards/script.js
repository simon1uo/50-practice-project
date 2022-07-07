const pannels = document.querySelectorAll(".panel");

pannels.forEach((pannel) => {
  pannel.addEventListener("click", () => {
    removeActiveClass();
    pannel.classList.add("active");
  });
});

function removeActiveClass() {
  pannels.forEach((pannel) => {
    pannel.classList.remove("active");
  });
}
