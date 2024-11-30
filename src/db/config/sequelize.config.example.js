const { Sequelize } = require('sequelize');

const DB_NAME = '';
const DB_USER = '';
const DB_PASSWORD = '';
const DB_HOST = '';
const DB_PORT = '';
const DB_DIALECT = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

module.exports = sequelize;
