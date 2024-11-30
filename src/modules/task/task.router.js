const express = require('express');
const {
  createTask,
  getTasks,
  getById,
  updateTask,
  deleteTask,
} = require('./controller/task.controller');
const schemaValidator = require('../../middlewares/schemaValidator.middleware');
const { createTaskSchema, updateTaskSchema } = require('./schema/task.schema');

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

taskRouter.patch(
  '/:id',
  schemaValidator(updateTaskSchema),
  async (req, res, next) => {
    try {
      await updateTask(req.body, req.params.id);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

taskRouter.delete('/:id', async (req, res, next) => {
  try {
    await deleteTask(req.params.id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = taskRouter;
