const express = require('express');
const {
  createTask,
  getTasks,
  getById,
} = require('./controller/task.controller');
const schemaValidator = require('../../middlewares/schemaValidator.middleware');
const createTaskSchema = require('./schema/task.schema');

const taskRouter = express.Router();

taskRouter.post(
  '/',
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

taskRouter.get('/:id', async (req, res, next) => {
  try {
    const task = await getById(req.params.id);

    res.status(200).json({
      message: 'Task obtained with success',
      task,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = taskRouter;
