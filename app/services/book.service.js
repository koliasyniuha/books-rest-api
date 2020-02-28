const dbUtil = require('../utils/db.util');
const { v4: uuidv4 } = require('uuid');

class BookService {
    static async addBook(book) {
        const bookItem = { uuid: uuidv4(), ...book };

        const params = {
            TableName: dbUtil.bookTableName,
            Item: bookItem,
        };

        await dbUtil.dbClient.put(params).promise();

        return bookItem;
    }

    static async updateBookDetails(bookUuid, updatedBook) {
        const params = {
            TableName: dbUtil.bookTableName,
            Key: { uuid: bookUuid },
            UpdateExpression: dbUtil.generateUpdateExpression(updatedBook),
            ExpressionAttributeValues: dbUtil.generateExpressionAttributeValues(updatedBook),
            ReturnValues: "UPDATED_NEW"
        };

        const data = await dbUtil.dbClient.update(params).promise();
        return data.Attributes;
    }

    static async deleteBook(bookUuid) {
        const params = {
            TableName: dbUtil.bookTableName,
            Key: { uuid: bookUuid },
        };

        return await dbUtil.dbClient.delete(params).promise();
    }

    static async getAllBooks() {
        const params = {
            TableName: dbUtil.bookTableName,
        };

        const data = await dbUtil.dbClient.scan(params).promise();
        return data.Items;
    }

    static async getBook(bookUuid) {
        const params = {
            TableName: dbUtil.bookTableName,
            Key: { uuid: bookUuid },
        };

        const data = await dbUtil.dbClient.get(params).promise();
        return data.Item;
    }
}

module.exports = BookService;