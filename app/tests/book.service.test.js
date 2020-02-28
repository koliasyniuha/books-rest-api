const { expect } = require('chai');
const bookService = require('../services/book.service');

const mockBook = {
    bookName: 'bookName',
    releaseDate: 1234567899,
    authorName: 'authorName',
};

const toUpdateMockBook = {
    bookName: 'bookName 121323',
    releaseDate: 3233467899,
    authorName: 'authorName some text',
};

let bookUuid = null;

describe('Book service tests', () => {
    it('Should add book to the DB :: BookService.addBook(bookUuid)', async () => {
        try {
            const result = await bookService.addBook(mockBook);
            bookUuid = result.uuid;

            expect(result).to.be.an('object');

            expect(result).to.haveOwnProperty('uuid');
            expect(result.uuid).to.be.a('string');

            expect(result).to.haveOwnProperty('bookName');
            expect(result.bookName).to.be.a('string');
            expect(result.bookName).to.be.equal(mockBook.bookName);

            expect(result).to.haveOwnProperty('releaseDate');
            expect(result.releaseDate).to.be.a('number');
            expect(result.releaseDate).to.be.equal(mockBook.releaseDate);

            expect(result).to.haveOwnProperty('authorName');
            expect(result.authorName).to.be.a('string');
            expect(result.authorName).to.be.equal(mockBook.authorName);
        } catch (e) {
            console.error(error.message);
        }
    });

    it('Should update book details :: BookService.updateBookDetails(bookUuid, updatedBook)', async () => {
        try {
            const result = await bookService.updateBookDetails(bookUuid, toUpdateMockBook);

            expect(result).to.be.an('object');

            expect(result).to.haveOwnProperty('bookName');
            expect(result.bookName).to.be.a('string');
            expect(result.bookName).to.be.equal(toUpdateMockBook.bookName);

            expect(result).to.haveOwnProperty('releaseDate');
            expect(result.releaseDate).to.be.a('number');
            expect(result.releaseDate).to.be.equal(toUpdateMockBook.releaseDate);

            expect(result).to.haveOwnProperty('authorName');
            expect(result.authorName).to.be.a('string');
            expect(result.authorName).to.be.equal(toUpdateMockBook.authorName);
        } catch (e) {
            console.error(error.message);
        }
    });

    it('Should get book by UUID :: BookService.getBook(bookUuid)', async () => {
        try {
            const result = await bookService.getBook(bookUuid);

            expect(result).to.be.an('object');

            expect(result).to.haveOwnProperty('uuid');
            expect(result.uuid).to.be.a('string');

            expect(result).to.haveOwnProperty('bookName');
            expect(result.bookName).to.be.a('string');
            expect(result.bookName).to.be.equal(toUpdateMockBook.bookName);

            expect(result).to.haveOwnProperty('releaseDate');
            expect(result.releaseDate).to.be.a('number');
            expect(result.releaseDate).to.be.equal(toUpdateMockBook.releaseDate);

            expect(result).to.haveOwnProperty('authorName');
            expect(result.authorName).to.be.a('string');
            expect(result.authorName).to.be.equal(toUpdateMockBook.authorName);
        } catch (e) {
            console.error(error.message);
        }
    });

    it('Should get all books :: BookService.getAllBooks()', async () => {
        try {
            const result = await bookService.getAllBooks();

            expect(result).to.be.an('array');
        } catch (e) {
            console.error(error.message);
        }
    });

    it('Should delete book by UUID :: BookService.delete(bookUuid)', async () => {
        try {
            const result = await bookService.deleteBook(bookUuid);

            expect(result).to.be.an('object');
        } catch (e) {
            console.error(error.message);
        }
    });
});