const { Task } = require('../model/task.model');

const create = async (data) => {
  return await Task.create(data);
};

const findAll = async () => {
  return await Task.findAll();
}

const findById = async (id) => {
  return await Task.findByPk(id);
};

const update = async (dataToUpdate, id) => {
  return await Task.update({ ...dataToUpdate }, { where: { id: id } });
};

const destroy = async (id) => {
  await Task.destroy({ where: { id: id } });
};

module.exports = { create, findAll, findById, update, destroy };
