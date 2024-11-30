const { DataTypes, Model } = require('sequelize');

const TASK_TABLE = 'tasks';
const MODEL_NAME = 'task';

const TaskSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  finish: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};

class Task extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_TABLE,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { TASK_TABLE, TaskSchema, Task };
