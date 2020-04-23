class Library {
  constructor(name, books) {
    this.name = name;
    this.books = Array.isArray(books) ? books : [];
    this.booksInLibrary = this.books.length;
  }

  getAllBooks() {
    let list = [];
    for (let i = 0; i < this.books.length; i++) {
      list.push(this.books[i].name);
    }
    return list;
  }

  addBook(obj) {
    this.books.push({
      name: obj.name,
      words: obj.words,
      year: obj.year,
      author: obj.author,
      language: obj.language.toLowerCase(),
      edition: obj.edition,
      pages: Math.ceil(obj.words / 800),
    });
    this.booksInLibrary = this.books.length;
  }

  deleteBook(name) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name.toLowerCase() === name.toLowerCase()) {
        this.books.splice(i, 1);
      }
    }
  }

  getAllLanguages() {
    let arrayOfLanguages = [0];
    for (let i = 0; i < this.books.length; i++) {
      let x = 0;
      for (let j = 0; j < arrayOfLanguages.length; j++) {
        if (this.books[i].language.toLowerCase() !== arrayOfLanguages[j]) {
        } else {
          x++;
        }
      }
      if (x === 0) {
        arrayOfLanguages.push(this.books[i].language.toLowerCase());
      }
    }
    arrayOfLanguages.splice(0, 1);
    return arrayOfLanguages;
  }

  getAllAuthors() {
    let arrayOfAuthors = [0];
    for (let i = 0; i < this.books.length; i++) {
      let x = 0;
      for (let j = 0; j < arrayOfAuthors.length; j++) {
        if (this.books[i].author !== arrayOfAuthors[j]) {
        } else {
          x++;
        }
      }
      if (x === 0) {
        arrayOfAuthors.push(this.books[i].author);
      }
    }
    arrayOfAuthors.splice(0, 1);
    return arrayOfAuthors;
  }

  addFrom(library) {
    for (let i = 0; i < library.books.length; i++) {
      this.books.push(library.books[i]);
    }
    library.books.splice(0, library.books.length);
  }
}
