const { create, findAll } = require('../service/task.service');
const NotFoundException = require('../../../exceptions/NotFoundException');

const createTask = async (taskData) => {
  return await create(taskData);
};

const getTasks = async () => {
  const tasks = await findAll();

  if (!tasks || tasks.length === 0) {
    throw new NotFoundException('No tasks were found');
  }

  return tasks;
};

module.exports = { createTask, getTasks };
