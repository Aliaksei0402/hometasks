const body = document.querySelector("body");

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  body.innerText = "";
  let point = [];
  const getPoint = function() {
    point = [event.clientX, event.clientY];
    return point;
  };

  body.innerHTML = `<table border="1" 
  style="margin-left: ${getPoint()[0] - 5}px; margin-top: ${getPoint()[1]}px;">
  <tbody>
  <tr><td><button btn="cut">Вырезать</button></td></tr>
  <tr><td><button btn="copy">Копировать</button></td></tr>
  <tr><td><button btn="paste">Вставить</button></td></tr>
  </tbody>
  </table>`;
});

document.addEventListener("click", function(q) {
  q.stopPropagation();
  if (q.target.getAttribute("btn") == "cut") {
    alert("Вырезать");
  }
  if (q.target.getAttribute("btn") == "copy") {
    alert("Копировать");
  }
  if (q.target.getAttribute("btn") == "paste") {
    alert("Вставить");
  } else {
    body.innerText = "";
  }
});
