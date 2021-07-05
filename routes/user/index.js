
const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/user/create-user');

userRouter.post('/create', userController.createUser);

module.exports = userRouter;