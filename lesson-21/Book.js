class Book {
  constructor(name, words, year, author, language, edition) {
    this.name = name;
    this.words = Number(words);
    this.year = Number(year);
    this.author = author;
    this.language = language.toLowerCase();
    this.edition = edition;
    this.pages = Math.ceil(this.words / 800);
  }
}
