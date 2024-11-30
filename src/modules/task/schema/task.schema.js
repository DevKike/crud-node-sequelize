const Joi = require('joi');

const title = Joi.string();
const description = Joi.string();

const createTaskSchema = Joi.object({
  title: title.required(),
  description: description.required(),
});

module.exports = createTaskSchema;
