const sls = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');

const { generalErrorHandler }  = require('./utils/errorHandlers');
const bookRouter = require('./routers/book.router');

const app = express();

app.use(bodyParser.json({ strict: false }));
app.use(bookRouter);

app.use(generalErrorHandler);

module.exports.server = sls(app);