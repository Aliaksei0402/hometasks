class Edition {
  constructor(name, language) {
    this.EditionName = name;
    this.EditionLanguage = language.toLowerCase();
  }

  newBook(name, words, author, year = 1000) {
    return {
      name: name,
      words: Number(words),
      author: author,
      year: Number(year),
      pages: Math.ceil(words / 800),
      edition: this.EditionName,
      language: this.EditionLanguage.toLowerCase(),
    };
  }
}
