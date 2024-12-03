const { DataTypes, Model } = require('sequelize');
const { USER_TABLE } = require('../../user/model/user.model');
;

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
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
  },
};

class Task extends Model {
  static associate(models) {
    this.hasOne(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  }

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
