const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");

const xhr = new XMLHttpRequest();
xhr.open("GET", "people.csv", true);
xhr.onload = function() {
  const lines = this.responseText.split(/\n/);
  const names = lines
    .shift()
    .trim()
    .split(", ");
  names.forEach(item => {
    thead.insertAdjacentHTML(
      "beforeend",
      `<td data="${item}" scope="col">${item}</td>`
    );
  });

  const items = lines.map(line => {
    const splitted = line.split(", ");
    const object = splitted.reduce(
      (result, value, index) => ({
        ...result,
        [names[index]]: value
      }),
      {}
    );
    return object;
  });

  const sorted = function(array) {
    tbody.innerText = "";
    array.forEach(item => {
      tbody.insertAdjacentHTML(
        "beforeend",
        `<tr scope="row">
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.position}</td>
      <td>${item.salary}</td>
      <td>${item.boss}</td>
      </tr>`
      );
    });
  };

  sorted(items);

  thead.addEventListener("click", function(e) {
    if (
      e.target.getAttribute("data") === "age" ||
      e.target.getAttribute("data") === "salary"
    ) {
      const data = e.target.getAttribute("data");
      const sortedItems = [...items].sort((a, b) => a[data] - b[data]);
      sorted(sortedItems);
    } else if (
      e.target.getAttribute("data") === "name" ||
      e.target.getAttribute("data") === "position" ||
      e.target.getAttribute("data") === "boss"
    ) {
      const data = e.target.getAttribute("data");
      const sortedItems = [...items].sort((a, b) => a[data] > b[data]);
      sorted(sortedItems);
      // не понимаю, почему не работает
    }
  });
};
xhr.send(null);
