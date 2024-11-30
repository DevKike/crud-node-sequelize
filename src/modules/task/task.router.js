const express = require('express');
const { createTask, getTasks } = require('./controller/task.controller');
const schemaValidator = require('../../middlewares/schemaValidator.middleware');
const createTaskSchema = require('./schema/task.schema');

const taskRouter = express.Router();

taskRouter.post(
  '/create',
  schemaValidator(createTaskSchema),
  async (req, res, next) => {
    try {
      const data = await createTask(req.body);

      res.status(201).json({
        message: 'Task created with success',
        task: data,
      });
    } catch (error) {
      next(error);
    }
  }
);

taskRouter.get('/', async (req, res, next) => {
  try {
    const tasks = await getTasks();

    res.status(200).json({
      message: 'Tasks obtained with success',
      tasks,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = taskRouter;
