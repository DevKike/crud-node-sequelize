const express = require('express');
const taskRouter = require('../modules/task/task.router');
const errorMiddleware = require('../middlewares/error.middleware');

const app = express();

app.use(express.json());

app.use('/api/task', taskRouter);

app.use(errorMiddleware);

module.exports = app;

