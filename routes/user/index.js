
const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/user/create-user');
const loginController = require('../../controllers/user/login');


userRouter.post('/create', userController.createUser);
userRouter.post('/login', loginController.login);

module.exports = userRouter;