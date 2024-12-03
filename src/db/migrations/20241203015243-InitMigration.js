'use strict';

const { TASK_TABLE, TaskSchema } = require("../../modules/task/model/task.model");
const { USER_TABLE, UserSchema } = require("../../modules/task/model/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(TASK_TABLE, TaskSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(TASK_TABLE);
  },
};
