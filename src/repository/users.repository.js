const DbQuery = require('../config/db-query');
const UsersDto = require('../model/dto/users.dto');
const { passwordUtil, passwordCompare } = require('../utils/password.utils');

const UsersRepository = (db) => {
  const create = async (payload) => {
    try {
      const password = await passwordUtil(payload.password);
      const result = await db.query(DbQuery().INSERT_USERS, [
        payload.username,
        payload.email,
        password,
      ]);
      return UsersDto(result);
    } catch (error) {
      return error.message;
    }
  };
  const list = async (userName) => {
    try {
      const users = [];
      let result = '';
      if (userName) {
        result = await db.query(DbQuery().SELECT_USERS_NAME, [`%${userName}%`]);
      } else {
        result = await db.query(DbQuery().SELECT_USERS_LIST);
      }
      for (let i = 0; i < result.rows.length; i++) {
        users.push(UsersDto(result, i));
      }
      return users;
    } catch (error) {
      return error.message;
    }
  };
  const getById = async (id) => {
    try {
      const result = await db.query(DbQuery().SELECT_USERS_ID, [id]);
      if (result.rowCount === 0) {
        return null;
      }
      return UsersDto(result);
    } catch (error) {
      return error.message;
    }
  };
  const getUserByUsernamePassword = async (username, password) => {
    try {
      const result = await db.query(DbQuery().SELECT_USERS, [username]);
      if (result.rowCount === 0) {
        return null;
      }
      const validPassword = await passwordCompare(
        password,
        result.rows[0].password
      );
      if (!validPassword) {
        return null;
      }
      return await getById(result.rows[0].id);
    } catch (error) {
      return error.message;
    }
  };
  const update = async (payLoad) => {
    try {
      const idx = await getById(payLoad.id);
      if (idx.data === null) return `Users with value ID ${id} not found`;
      const result = await db.query(DbQuery().UPDATE_USERS, [
        payLoad.username,
        payLoad.email,
        payLoad.password,
        payLoad.id,
      ]);
      return UsersDto(result);
    } catch (err) {
      return err.message;
    }
  };
  const remove = async (id) => {
    try {
      const result = await db.query(DbQuery().DELETE_USERS, [id]);
      if (result.rowCount === 0) {
        return `Users with value ID ${id} Not Found`;
      }
      return `Users with value ID ${id} Succesfully Deleted`;
    } catch (err) {
      return err.message;
    }
  };
  return { create, list, getById, getUserByUsernamePassword, update, remove };
};
module.exports = UsersRepository;
