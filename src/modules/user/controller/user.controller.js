const { create } = require('../service/user.service');

const createUser = async (userData) => {
  return await create(userData);
};

module.exports = { createUser };
