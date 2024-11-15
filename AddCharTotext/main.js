const spanText = document.querySelector(".text");
const txt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dignissim lacus, eu convallis elit dictum vitae. Pellentesque convallis ornare ultricies. Quisque volutpat varius libero, nec finibus augue lobortis et. Cras condimentum augue sed ligula interdum tempus. Donec a libero lacus. Fusce dignissim, lacus eu pulvinar ullamcorper, velit felis pharetra elit, ut efficitur eros ex non ex.";

let indexText = 0;
const time = 40;
const addLetter = () => {
  spanText.textContent += txt[indexText];
  indexText++;
  if (indexText === txt.length) clearInterval(indexTyping);
};
const indexTyping = setInterval(addLetter, time);
