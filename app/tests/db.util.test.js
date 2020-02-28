const { expect } = require('chai');
const dbUtil = require('../utils/db.util');

const toUpdateMockBook = {
    bookName: 'bookName 121323',
    releaseDate: 3233467899,
    authorName: 'authorName some text',
};

const resultUpdateExpression = 'set bookName = :bookName, releaseDate = :releaseDate, authorName = :authorName';
const resultExpressionAttributeValues = {
    ':bookName': 'bookName 121323',
    ':releaseDate': 3233467899,
    ':authorName': 'authorName some text'
};

describe('DB util tests', () => {
    it('Should get db client :: DbUtil.dbClient', () => {
        const result = dbUtil.dbClient;

        expect(result).to.be.an('object');
    });

    it('Should get books table name :: DbUtil.bookTableName', () => {
        const result = dbUtil.bookTableName;

        expect(result).to.be.a('string');
        expect(result).to.be.equal(process.env.BOOKS_TABLE);
    });

    it('Should generate update expression :: DbUtil.generateUpdateExpression(item)', () => {
        const result = dbUtil.generateUpdateExpression(toUpdateMockBook);

        expect(result).to.be.a('string');
        expect(result).to.be.equal(resultUpdateExpression);
    });

    it('Should generate expression attribute values :: DbUtil.generateExpressionAttributeValues(item)', () => {
        const result = dbUtil.generateExpressionAttributeValues(toUpdateMockBook);

        expect(result).to.be.an('object');
        expect(result).to.deep.equal(resultExpressionAttributeValues);
    });
});