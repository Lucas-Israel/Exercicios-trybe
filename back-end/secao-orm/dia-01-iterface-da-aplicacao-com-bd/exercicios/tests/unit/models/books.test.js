const { sequelize, dataTypes, checkModelName, checkPropertyExists } = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/book.model');

describe('O model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "book"', () => {
    checkModelName(Book)('book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});