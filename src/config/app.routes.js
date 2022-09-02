const Routes = () => {
  const POST_USERS = '/users';
  const GET_USERS_LIST = '/users';
  const GET_USERS = '/users/:id';
  const PUT_USERS = '/users';
  const DELETE_USERS = '/users/:id';
  return { POST_USERS, GET_USERS_LIST, GET_USERS, PUT_USERS, DELETE_USERS };
};
module.exports = Routes;
