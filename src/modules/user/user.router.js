const express = require('express');
const { createUser } = require('./controller/user.controller');

const userRouter = express.Router();

userRouter.post('/register', async (req, res, next) => {
  try {
    await createUser(req.body);
    res.status(201).json({ message: 'User created with success!' });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
