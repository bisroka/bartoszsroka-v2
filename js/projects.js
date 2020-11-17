const div = document.querySelectorAll("article div");
const divArr = [...div];

divArr.forEach(d =>
  d.addEventListener("mouseover", function() {
    d.style.opacity = "1";
  })
);
divArr.forEach(d =>
  d.addEventListener("mouseout", function() {
    d.style.opacity = "0";
  })
);
