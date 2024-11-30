const { Sequelize } = require('sequelize')
const setupModel = require('../setupModel');

const DB_NAME = 'task_crud';
const DB_USER = 'root';
const DB_PASSWORD = 'Alvaro1516!';
const DB_HOST = 'localhost';
const DB_PORT = '3306';
const DB_DIALECT = 'mysql';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

setupModel(sequelize);

module.exports = sequelize;
