const { Task, TaskSchema } = require('../modules/task/model/task.model');
const { User, UserSchema } = require('../modules/user/model/user.model');

const setupModel = (sequelize) => {
  Task.init(TaskSchema, Task.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  User.hasOne(Task);
  Task.hasOne(User);
};

module.exports = setupModel;
