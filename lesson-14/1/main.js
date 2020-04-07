const main = document.getElementById("main");
let x = null;

const move = function (e) {
  if (x !== null) {
    x.style.setProperty("left", `${e.offsetX + 5}px`);
    x.style.setProperty("top", `${e.offsetY + 5}px`);
    x.style.setProperty("margin-top", `${0}px`);
  }
};

main.addEventListener("click", function (e) {
  if (x == null) {
    if (e.target.classList.contains("colored")) {
      x = e.target;
    }
  } else {
    x = null;
  }
});

main.addEventListener("mousemove", move);
