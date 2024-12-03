const { User } = require("../model/user.model");


const create = async (data) => {
  return await User.create(data);
};

const findAll = async () => {
  return await User.findAll();
};

const findById = async (id) => {
  return await User.findByPk(id);
};

const update = async (dataToUpdate, id) => {
  return await User.update({ ...dataToUpdate }, { where: { id: id } });
};

const destroy = async (id) => {
  await User.destroy({ where: { id: id } });
};

module.exports = { create, findAll, findById, update, destroy };
