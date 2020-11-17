const arrowsdown = document.querySelectorAll(".fa-chevron-down");
const arrowsup = document.querySelectorAll(".fa-chevron-up");
const arrowsDownArr = [...arrowsdown];
const arrowsUpArr = [...arrowsup];

const arrows = arrowsDownArr.concat(arrowsUpArr);

const animation = arrows.forEach(arrow => {
  setInterval(() => {
    arrow.classList.toggle("active");
  }, 800);
});
