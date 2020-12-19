const express = require('express');
const logger = require('morgan');
const router = require('./router');
const { errorHandler } = require('./lib/error-handler');

const app = express();

app.use(logger('dev'));

app.use('/stations', router);

app.use(errorHandler);

module.exports = app;
