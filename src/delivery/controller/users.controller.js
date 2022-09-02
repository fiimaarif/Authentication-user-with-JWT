const db = require('../../config/db-connect');
const UsersRepository = require('../../repository/users.repository');
const UsersService = require('../../service/users.service');
const Response = require('../../utils/response');

const UsersController = () => {
  const usersService = UsersService(UsersRepository(db));
  const createUsers = async (req, res) => {
    try {
      const payload = req.body;
      const newUsers = await req.service.registerUsers(payload);
      res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUsers));
    } catch (error) {
      res.json(Response().errorMessage('XX', error.message));
    }
  };
  const listUSers = async (req, res) => {
    try {
      const userName = req.query.username;
      const users = await req.service.findAllUsers(userName);
      res.json(Response().successMessage(res.statusCode, 'SUCCESS', users));
    } catch (error) {
      res.json(Response().errorMessage('XX', error.message));
    }
  };
  const getUsers = async (req, res) => {
    const id = req.params.id;
    try {
      const usersId = await usersService.findUsersById(+id);
      res.json(Response().successMessage(res.statusCode, 'SUCCESS', usersId));
    } catch (error) {
      res.json(Response().errorMessage('XX', error.message));
    }
  };
  const updateUsers = async (req, res) => {
    try {
      const payLoad = req.body;
      const usersIdUp = await usersService.editUsers(payLoad);
      res.json(Response().successMessage(res.statusCode, 'SUCCESS', usersIdUp));
    } catch (err) {
      res.json(Response().successMessage('XX', err.message));
    }
  };
  const deleteUsersById = async (req, res) => {
    try {
      const id = req.params.id;
      const delUsersId = await usersService.deleteUsers(+id);
      res.json(
        Response().successMessage(res.statusCode, 'SUCCESS', delUsersId)
      );
    } catch (err) {
      res.json(Response().successMessage('XX', err.message));
    }
  };
  return { createUsers, listUSers, getUsers, updateUsers, deleteUsersById };
};
module.exports = UsersController;
