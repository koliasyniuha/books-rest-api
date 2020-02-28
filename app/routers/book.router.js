const bookRouter = require('express').Router({mergeParams: true});
const bookController = require('../controllers/book.controller');
const { routesErrorHandler } = require('../utils/errorHandlers');

bookRouter
    .put('/book/:bookUuid', routesErrorHandler(bookController.updateBookDetails))
    .get('/book/:bookUuid', routesErrorHandler(bookController.getBook))
    .delete('/book/:bookUuid', routesErrorHandler(bookController.deleteBook))
    .get('/books', routesErrorHandler(bookController.getAllBooks))
    .post('/book', routesErrorHandler(bookController.addBook));

module.exports = bookRouter;