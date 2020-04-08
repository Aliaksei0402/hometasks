const body = document.querySelector("body");
const description = document.getElementById("description");
const city = document.getElementById("city");
const search = document.getElementById("search");
const searchBlock = document.getElementById("searchBlock");
const global = document.getElementById("global");
const xhr = new XMLHttpRequest();

search.addEventListener("click", function () {
  xhr.open(
    "GET",
    "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf",
    true
  );
  xhr.onload = function () {
    const data = JSON.parse(this.responseText);

    render(data);
  };
  xhr.send(null);
  global.innerText = "Loading...";
});

const render = function (arr) {
  global.innerText = "";
  let descriptionValue = description.value;
  let cityValue = city.value;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].location.includes(cityValue) &&
      arr[i].description.includes(descriptionValue)
    ) {
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("main");
      global.appendChild(mainDiv);

      const left = document.createElement("div");
      left.classList.add("left");
      mainDiv.appendChild(left);

      const right = document.createElement("div");
      right.classList.add("right");
      mainDiv.appendChild(right);

      const top = document.createElement("div");
      top.classList.add("top");
      left.appendChild(top);

      const topLeft = document.createElement("div");
      topLeft.classList.add("topLeft");
      top.appendChild(topLeft);

      const date = document.createElement("div");
      date.classList.add("date");
      date.innerText = arr[i].created_at.toString();
      topLeft.appendChild(date);

      const space = document.createElement("span");
      space.innerText = " / ";
      topLeft.appendChild(space);

      const address = document.createElement("div");
      address.classList.add("address");
      address.innerText = arr[i].location;
      topLeft.appendChild(address);

      const type = document.createElement("div");
      type.classList.add("type");
      type.innerText = arr[i].type;
      top.appendChild(type);

      const title = document.createElement("h2");
      title.innerText = arr[i].title;
      left.appendChild(title);

      const text = document.createElement("p");
      text.classList.add("text");
      text.innerHTML = arr[i].description;
      left.appendChild(text);

      const href = document.createElement("a");
      href.setAttribute("href", arr[i].company_url);
      right.appendChild(href);

      const logo = document.createElement("img");
      logo.setAttribute("src", `${arr[i].company_logo}`);
      logo.setAttribute("alt", "logo");
      href.appendChild(logo);

      const url = document.createElement("a");
      url.setAttribute("href", arr[i].url);
      url.innerText = "Ссылка на GitHub";
      right.appendChild(url);
    }
  }
};
