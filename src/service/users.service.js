const UsersService = (usersRepository) => {
  const { create, list, getById, getUserByUsernamePassword, update, remove } =
    usersRepository;
  const registerUsers = async (newUser) => {
    try {
      return await create(newUser);
    } catch (error) {
      return error.message;
    }
  };
  const findAllUsers = async (userName) => {
    try {
      return await list(userName);
    } catch (error) {
      return error.message;
    }
  };
  const findUsersById = async (id) => {
    try {
      return getById(id);
    } catch (error) {
      error.message;
    }
  };
  const findUserByUsernamePassword = async (username, password) => {
    try {
      return await getUserByUsernamePassword(username, password);
    } catch (error) {
      return error.message;
    }
  };
  const editUsers = async (payLoad) => {
    try {
      return await update(payLoad);
    } catch (err) {
      return err.message;
    }
  };
  const deleteUsers = async (id) => {
    try {
      return await remove(id);
    } catch (err) {
      return err.message;
    }
  };
  return {
    registerUsers,
    findAllUsers,
    findUsersById,
    findUserByUsernamePassword,
    editUsers,
    deleteUsers,
  };
};
module.exports = UsersService;
