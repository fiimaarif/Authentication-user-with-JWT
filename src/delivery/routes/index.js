const express = require('express');
const db = require('../../config/db-connect');
const UsersRepository = require('../../repository/users.repository');
const AuthService = require('../../service/auth.service');
const UsersService = require('../../service/users.service');
const AuthController = require('../controller/auth.controller');
const UsersController = require('../controller/users.controller');
const AuthRoute = require('./auth.routes');
const UsersRoute = require('./users.routes');
const router = express.Router();

const usersService = (req, res, next) => {
  req.service = UsersService(UsersRepository(db));
  next();
};
const authService = (req, res, next) => {
  req.service = AuthService(UsersService(UsersRepository(db)));
  next();
};

router.use('/users', usersService, UsersRoute(UsersController));
router.use('/auth', authService, AuthRoute(AuthController));
module.exports = router;
