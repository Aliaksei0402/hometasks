const div = document.querySelector("div");

div.addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.hasAttribute("href")) {
    createQuestion();
  }

  const question = document.getElementById("question");
  const buttonYes = document.getElementById("buttonYes");
  const buttonNo = document.getElementById("buttonNo");

  buttonYes.addEventListener("click", function() {
    // cancel preventDefault or imitation "click"
  });

  buttonNo.addEventListener("click", function() {
    question.remove();
  });
});

const createQuestion = function() {
  div.insertAdjacentHTML(
    "beforeend",
    `<div id="question">
    <p>Вы действительно хотите перейти по ссылке?</p>
    <button id="buttonYes">Да</button>
    <button id="buttonNo">Нет</button>
    </div>`
  );
};
