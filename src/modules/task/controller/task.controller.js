const { create, findAll, findById } = require('../service/task.service');
const NotFoundException = require('../../../exceptions/NotFoundException');

const createTask = async (taskData) => {
  return await create(taskData);
};

const getById = async (id) => {
  const task = await findById(id);

  if (!task) {
    throw new NotFoundException(`Task with ID ${id} was not found`);
  }

  return task;
};

const getTasks = async () => {
  const tasks = await findAll();

  if (!tasks || tasks.length === 0) {
    throw new NotFoundException('No tasks were found');
  }

  return tasks;
};

module.exports = { createTask, getById, getTasks };
