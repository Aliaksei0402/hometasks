const analyze = document.getElementById("analyze");
const table = document.getElementById("table");
const data = document.getElementById("data");

analyze.addEventListener("click", function () {
  const input = document.getElementById("input");
  const file = input.files[0];

  if (!file) {
    input.classList.add("defaultFile");
    const div = document.createElement("div");
    div.innerText = "Файл не выбран";
    div.setAttribute("id", "noFile");
    data.prepend(div);
  } else {
    if (data.firstElementChild.getAttribute("id") === "noFile") {
      input.classList.remove("defaultFile");
      data.firstElementChild.remove();
    }
    const reader = new FileReader();
    reader.onload = function () {
      countSymbols(reader.result);
    };
    reader.readAsText(file);
  }
});

let objOfSymbols = { a: 0 };

const countSymbols = function (text) {
  objOfSymbols = { a: 0 };
  for (let i = 0; i < text.length; i++) {
    let x = 0;
    for (key in objOfSymbols) {
      if (text[i] === key) {
        objOfSymbols[key]++;
        x++;
      }
    }
    if (x === 0) {
      objOfSymbols[text[i]] = 1;
    }
  }
  if (objOfSymbols.a === 0) {
    delete objOfSymbols.a;
  }
  sorting(objOfSymbols);
};

const sorting = function (object) {
  let arrayOfSymbols = Object.entries(object).sort((a, b) => b[1] - a[1]);
  table.innerText = "";
  table.insertAdjacentHTML(
    "afterbegin",
    `<thead><tr><td scope="col">Символ</td><td scope="col">Количество в файле</td></tr></thead>`
  );
  for (let i = 0; i < arrayOfSymbols.length; i++) {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr><td scope="col">${arrayOfSymbols[i][0]}</td><td scope="col">${arrayOfSymbols[i][1]}</td></tr>`
    );
  }
};
