class App {
  init() {
    let books = [];
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "books.json", true);
    xhr.onload = function () {
      books = JSON.parse(this.responseText);
      const bookA = new Book(
        "A",
        3263582,
        1994,
        "Zenchenko",
        "russian",
        "Pravda"
      );
      const bookB = new Book("B", 514852, 1998, "Papeko", "english", "Lozh");

      // console.log(bookA);
      // console.log(bookB);

      const editionPravda = new Edition("Pravda", "Russian");
      const editionLozh = new Edition("Lozh", "English");

      // console.log(editionPravda);
      // console.log(editionLozh);

      const bookC = editionLozh.newBook("Kolobok", 542, "Narod");
      const bookD = editionPravda.newBook("Mymy", 54854, "Tolstoy");

      // console.log(bookC);
      // console.log(bookD);

      const libDostoevskogo = new Library("Dostoevskogo", [
        books[2],
        bookA,
        bookB,
      ]);
      const libPushkina = new Library("Pushkina", [
        books[0],
        books[1],
        books[5],
      ]);
      const libLermontova = new Library("Lermontova", [books[3], books[4]]);

      // console.log(libDostoevskogo);
      // console.log(libPushkina);
      // console.log(libLermontova);

      libDostoevskogo.addBook(bookC);
      libPushkina.addBook(bookD);
      libPushkina.addBook(editionLozh.newBook("Voina i mir", 32842, "Tolstoy"));
      libLermontova.addBook(editionLozh.newBook("Idiot", 32842, "Dostoevskiy"));

      // console.log(libDostoevskogo.getAllBooks());
      // console.log(libDostoevskogo.getAllAuthors());
      // console.log(libDostoevskogo.getAllLanguages());
      // libDostoevskogo.deleteBook("Kolobok");
      // libPushkina.addFrom(libLermontova);

      // console.log(libDostoevskogo);
      // console.log(libPushkina);
      // console.log(libLermontova);

      const librariesDiv = document.getElementById("librariesDiv");
      const renderer = new Renderer();

      renderer.renderLibrary(libDostoevskogo, librariesDiv);
      renderer.renderLibrary(libPushkina, librariesDiv);
      renderer.renderLibrary(libLermontova, librariesDiv);

      // console.log(libDostoevskogo);
      // console.log(libPushkina);
      // console.log(libLermontova);

      const edition = document.getElementById("edition");
      renderer.renderPublisher(
        editionPravda,
        [libDostoevskogo, libPushkina, libLermontova],
        edition
      );

      // console.log(libLermontova);
    };
    xhr.send(null);
  }
}

const Appp = new App();
Appp.init();
