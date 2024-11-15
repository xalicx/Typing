const spanText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dignissim lacus, eu convallis elit dictum vitae. Pellentesque convallis ornare ultricies. Quisque volutpat varius libero, nec finibus augue lobortis et.";

let indexText = 0;
const time = 40;

const addLetter = () => {
  spanText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
  console.log("ok");
};

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);
