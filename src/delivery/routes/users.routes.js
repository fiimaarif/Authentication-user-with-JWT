const express = require('express');
const AuthMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
const UsersRoute = (usersController) => {
  const { createUsers, listUSers, getUsers, updateUsers, deleteUsersById } =
    usersController();
  router.post('/', AuthMiddleware, createUsers);
  router.get('/', AuthMiddleware, listUSers);
  router.get('/:id', AuthMiddleware, getUsers);
  router.put('/', AuthMiddleware, updateUsers);
  router.delete('/:id', AuthMiddleware, deleteUsersById);

  return router;
};
module.exports = UsersRoute;
