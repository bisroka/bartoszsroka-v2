const buttonScrollUp = document.querySelector(".arrow--up");
const buttonScrollDown = document.querySelector(".arrow");
const projectsSection = document.querySelector(".about");

buttonScrollUp.addEventListener("click", e => {
  e.preventDefault();

  window.scrollBy({
    top: -window.pageYOffset,
    behavior: "smooth"
  });
});

buttonScrollDown.addEventListener("click", () => {
  const heightToScroll = projectsSection.offsetTop - window.pageYOffset;

  window.scrollBy({
    top: heightToScroll,
    behavior: "smooth"
  });
});
