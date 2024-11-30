const {
  create,
  findAll,
  findById,
  update,
  destroy,
} = require('../service/task.service');
const NotFoundException = require('../../../exceptions/NotFoundException');

const createTask = async (taskData) => {
  return await create(taskData);
};

const getById = async (taskId) => {
  const task = await findById(taskId);

  if (!task) {
    throw new NotFoundException(`Task with ID ${taskId} was not found`);
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

const updateTask = async (taskToUpdate, taskId) => {
  await getById(taskId);

  await update(taskToUpdate, taskId);
};

const deleteTask = async (taskId) => {
  await getById(taskId);

  await destroy(taskId);
};

module.exports = { createTask, getById, getTasks, updateTask, deleteTask };
