const photo = document.querySelector(".photo");
const times = document.querySelector("#times");
let photoCoords = photo.getBoundingClientRect();

let clickTime = 0;
let timesClicked = 0;

photo.addEventListener("click", (event) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime;
  } else {
    if (new Date().getTime() - clickTime < 800) {
      craeteHeart(event);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function craeteHeart(event) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = event.clientX;
  const y = event.clientY;

  const xInside = x - photoCoords.left;
  const yInside = y - photoCoords.top;

  console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  photo.appendChild(heart);
  times.innerHTML = ++timesClicked;
  // setTimeout(() => heart.remove(), 1000);
}
