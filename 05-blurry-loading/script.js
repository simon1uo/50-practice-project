const loadingProgress = document.querySelector(".loading-progress");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(() => {
  load++;

  if (load === 100) {
    clearInterval(int);
  }

  loadingProgress.innerText = `${load} %`;
  loadingProgress.style.opacity = scale(load, 0, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}, 30);

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
