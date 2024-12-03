const Joi = require('joi');

const title = Joi.string();
const description = Joi.string();
const finish = Joi.boolean();
const userId = Joi.number();

const createTaskSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  userId: userId.required(),
});

const updateTaskSchema = Joi.object({
  title: title,
  description: description,
  finish: finish,
});

module.exports = { createTaskSchema, updateTaskSchema };
