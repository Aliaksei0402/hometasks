const fairytales = document.getElementById("fairytales");
const genreDiv = document.getElementById("genre");
const authorDiv = document.getElementById("author");
const text = document.getElementById("text");

const kolobok = document.getElementById("kolobok");
const teremok = document.getElementById("teremok");
const kurochkaryba = document.getElementById("kurochkaryba");
const repka = document.getElementById("repka");

const displayFairytale = function(file, genre, author) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onload = function() {
    genreDiv.innerText = `Жанр: ${genre}`;
    authorDiv.innerText = `Автор(ы): ${author}`;
    text.innerText = this.responseText;
  };
  text.innerText = "Идет Загрузка";
  xhr.send(null);
};

kolobok.addEventListener("click", function() {
  displayFairytale(
    "kolobok.txt",
    "Народная сказка",
    "Екатерина Авдеева, Константин Ушинский"
  );
});

teremok.addEventListener("click", function() {
  displayFairytale(
    "teremok.txt",
    "Русская народная сказка",
    "А. Толстой, Д. Буторин, И. Огорельцев, В. Сутеев, В. Бианка"
  );
});

kurochkaryba.addEventListener("click", function() {
  displayFairytale("kurochkaryba.txt", "Русская народная сказка", "Неизвестно");
});

repka.addEventListener("click", function() {
  displayFairytale("repka.txt", "Русская народная сказка", "А. Толстой");
});
