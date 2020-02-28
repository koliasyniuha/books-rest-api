const BookService = require('../services/book.service');

class BookController {
    static async addBook(req, res) {
        res.json(await BookService.addBook(req.body));
    }

    static async updateBookDetails(req, res) {
        res.json(await BookService.updateBookDetails(req.params.bookUuid, req.body));
    }

    static async deleteBook(req, res) {
        const { bookUuid } = req.params;
        await BookService.deleteBook(bookUuid);
        res.json({ message: `Book associated with uuid [${bookUuid}] has been deleted.` });
    }

    static async getAllBooks(req, res) {
        res.json(await BookService.getAllBooks());
    }

    static async getBook(req, res) {
        res.json(await BookService.getBook(req.params.bookUuid));
    }
}

module.exports = BookController;