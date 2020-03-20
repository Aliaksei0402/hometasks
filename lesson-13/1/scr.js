const text = document.querySelector("input");

function checkVowel(key) {
  return (
    key == "A" ||
    key == "E" ||
    key == "I" ||
    key == "O" ||
    key == "U" ||
    key == "a" ||
    key == "e" ||
    key == "i" ||
    key == "o" ||
    key == "u" ||
    key == "ArrowLeft" ||
    key == "ArrowRight" ||
    key == "Delete" ||
    key == "Backspace"
  );
}
