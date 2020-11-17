const spnText = document.querySelector(".spnTxt");
const spnCursor = document.querySelector(".spnCursor");
const txt = "HELLO,HOW CAN I HELP YOU? ";

let indexText = 0;

const time = 100;

const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

const indexTyping = setInterval(addLetter, time);

setInterval(cursorAnimation, 400);
