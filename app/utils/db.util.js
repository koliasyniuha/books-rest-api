const AWS = require('aws-sdk');

class DbUtil {
    constructor(dbClient) {
        this.__dbClient = dbClient;
    }

    get dbClient() {
        return this.__dbClient;
    }

    get bookTableName() {
        return process.env.BOOKS_TABLE;
    }

    generateUpdateExpression(item) {
        return Object.keys(item).reduce((prev, next) => `${ prev } ${ next } = :${ next },`, 'set').slice(0, -1);
    }

    generateExpressionAttributeValues(item) {
        return Object.keys(item).reduce((prev, next) => {
            const keyValue = `:${ next }`;
            return { ...prev, ...{ [keyValue]: item[next] } };
        }, {});
    }
}

module.exports = new DbUtil(new AWS.DynamoDB.DocumentClient());