const { Task, TaskSchema } = require('../modules/task/model/task.model');

const setupModel = (sequelize) => {
  Task.init(TaskSchema, Task.config(sequelize));
};

module.exports = setupModel;