// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["text 1", "text 2", "text 3"];

let activeLetter = -5;
let activeText = 0;

// Implementacja
const addLetter = () => {
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;

    if (activeText === txt.length) return;
    return setTimeout(() => {
      activeLetter = 0;
      spnText.textContent = "";
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 100);
};

addLetter();
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
