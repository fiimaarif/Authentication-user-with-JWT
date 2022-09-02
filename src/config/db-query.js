const DbQuery = () => {
  const INSERT_USERS = `INSERT INTO tb_users (username,email,password) VALUES ($1,$2,$3) RETURNING *`;
  const SELECT_USERS_LIST = `SELECT id, username,email,password from tb_users order by id ASC`;
  const SELECT_USERS_ID = `SELECT id, username,email,password from tb_users where id = $1`;
  const SELECT_USERS_NAME = `SELECT id, username,email,password from tb_users WHERE username ilike $1`;
  const UPDATE_USERS = `UPDATE tb_users set username = $1, email = $2, password = $3 where id = $4 RETURNING *`;
  const DELETE_USERS = `DELETE FROM tb_users where id=$1`;
  const SELECT_USERS = `SELECT id, password from tb_users WHERE username = $1`;

  return {
    INSERT_USERS,
    SELECT_USERS_LIST,
    SELECT_USERS_ID,
    SELECT_USERS_NAME,
    UPDATE_USERS,
    DELETE_USERS,
    SELECT_USERS,
  };
};

module.exports = DbQuery;
