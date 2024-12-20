const { DataTypes, Model } = require('sequelize');

const USER_TABLE = 'users';
const MODEL_NAME = 'user';

const UserSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Task, {
      as: 'task',
      foreignKey: 'userId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
