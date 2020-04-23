class Renderer {
  renderBook(book, container) {
    container.insertAdjacentHTML(
      "beforeend",
      ` <div>Имя: ${book.name}</div>
        <div>Количесвто слов в книге: ${book.words}</div>
        <div>Год издания: ${book.year}</div>
        <div>Автор: ${book.author}</div>
        <div>Язык: ${book.language}</div>
        <div>Издательство: ${book.edition}</div>
        <div>Количество страниц: ${Math.ceil(book.words / 800)}</div>`
    );
  }

  renderLibrary(library, container) {
    const AllLibreriesDivs = document.getElementById(library.name);
    let libraryDiv = "";
    if (AllLibreriesDivs === null) {
      libraryDiv = document.createElement("div");
      container.appendChild(libraryDiv);
    } else {
      libraryDiv = document.getElementById(library.name);
    }
    libraryDiv.innerText = "";
    libraryDiv.setAttribute("id", library.name);
    libraryDiv.classList.add("library");
    libraryDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="information">
      <div>Имя библиотеки: ${library.name}</div>
      <div>Количество книг в библиотеке: ${library.booksInLibrary}</div>
      <div>Языки библиотеки: ${library.getAllLanguages()}</div>
      </div>`
    );

    let books = document.createElement("div");
    books.classList.add("books");
    libraryDiv.appendChild(books);

    for (let i = 0; i < library.books.length; i++) {
      let book = document.createElement("div");
      book.classList.add("book");
      this.renderBook(library.books[i], book);
      books.appendChild(book);
    }
  }

  renderPublisher(publisher, libraries, container) {
    container.insertAdjacentHTML(
      "beforeend",
      ` <div class="edition">
      <div>Издательство: ${publisher.EditionName}</div>
        <div>Язык издательства: ${publisher.EditionLanguage}</div>
        <form>
            <input id="nameInput" placeholder="Название книги"/>
            <input id="wordsInput" placeholder="Количество слов в книге" type="number"/>
            <input id="yearInput" placeholder="Год издания" type="number"/>
            <input id="authorInput" placeholder="Автор"/>
            <input id="languageInput" placeholder="Язык"/>
            <select id="libraryInput">
              <option selected>Выберите библиотеку</option>
            </select>
            <button id="addBookInput" type="button">Добавить</button>
        </form>
        </div>
      `
    );
    const libraryInput = document.getElementById("libraryInput");

    for (let i = 0; i < libraries.length; i++) {
      libraryInput.insertAdjacentHTML(
        "beforeend",
        `<option selectedLibrary="${i}">${libraries[i].name}</option>`
      );
    }

    const nameInput = document.getElementById("nameInput");
    const wordsInput = document.getElementById("wordsInput");
    const yearInput = document.getElementById("yearInput");
    const authorInput = document.getElementById("authorInput");
    const languageInput = document.getElementById("languageInput");
    const addBookInput = document.getElementById("addBookInput");

    const click = function () {
      const book = new Book(
        nameInput.value,
        wordsInput.value,
        yearInput.value,
        authorInput.value,
        languageInput.value,
        publisher.EditionName
      );
      let selectedLibrary = {};
      for (let i = 0; i < libraries.length; i++) {
        if (libraries[i].name === libraryInput.value) {
          selectedLibrary = libraries[i];
        }
      }
      const rendererer = new Renderer();
      selectedLibrary.addBook(book);
      rendererer.renderLibrary(selectedLibrary, librariesDiv);
    };
    addBookInput.addEventListener("click", click);
  }
}
