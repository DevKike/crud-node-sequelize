const express = require('express');
const taskRouter = require('../modules/task/task.router');
const errorMiddleware = require('../middlewares/error.middleware');
const userRouter = require('../modules/user/user.router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/task', taskRouter);
app.use('/api/user', userRouter);

app.use(errorMiddleware);

module.exports = app;
