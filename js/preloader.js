const preloader = document.querySelector(".preloader");

const preloaderDots = document.querySelector(".preloader__dots");
const dots = "..........";
let indexDots = 0;
const timeDots = 100;
const addDot = () => {
  preloaderDots.textContent += dots[indexDots];
  indexDots++;
  if (indexDots === dots.length) clearInterval(indexTypingDot);
};

const indexTypingDot = setInterval(addDot, timeDots);

window.addEventListener("load", () => {
  preloader.style.display = "none";
});
