const body = document.querySelector("body");
const xhr = new XMLHttpRequest();
const xhrSecond = new XMLHttpRequest();

xhr.open("GET", "main.json", true);
xhr.onload = function () {
  const all = JSON.parse(this.responseText);
  for (let i = 0; i < all.length; i++) {
    body.insertAdjacentHTML(
      "beforeend",
      `<div json=${all[i].json}>${all[i].name}</div>`
    );
  }

  body.addEventListener("click", function (e) {
    if (e.target.hasAttribute("json")) {
      const json = e.target.getAttribute("json");
      xhrSecond.open("GET", json, true);
      xhrSecond.onload = function () {
        const shops = JSON.parse(this.responseText);
        const div = document.createElement("div");
        let sumsq = 0;
        let sumvisitors = 0;
        for (let i = 0; i < shops.length; i++) {
          div.insertAdjacentHTML("beforeend", `<p>${shops[i].address}</p>`);
          sumsq += Number(shops[i].sq);
          sumvisitors += Number(shops[i].averageBuyers);
        }
        div.insertAdjacentHTML(
          "beforeend",
          `<p>Количество магазинов в сети: ${shops.length}</p>
          <p>Суммарная площадь магазинов: ${sumsq} м2</p>
          <p>Средняя площадь магазинов: ${Math.round(
            sumsq / shops.length
          )} м2</p>
          <p>Суммарное дневное число посетителей всех магазинов в сети: ${sumvisitors}</p>`
        );
        if (e.target.firstElementChild === null) {
          e.target.appendChild(div);
          div.setAttribute("chain", json);
          div.classList.add("border");
        } else {
          e.target.firstElementChild.remove();
        }
      };
      xhrSecond.send(null);
    }
  });
};
xhr.send(null);
