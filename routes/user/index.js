
const express = require('express');
const userRouter = express.Router();
const userController = require('../../controllers/user/create-client');
const adminController = require('../../controllers/user/create-admin');
const loginController = require('../../controllers/user/login');


userRouter.post('/register', userController.createUser);
userRouter.post('/create-admin', adminController.createAdmin);
userRouter.post('/login', loginController.login);

module.exports = userRouter;