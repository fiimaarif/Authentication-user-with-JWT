const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { s, m } = require('time-convert');

const AuthService = (userService) => {
  const { findUserByUsernamePassword } = userService;
  dotenv.config();
  const login = async (payload) => {
    const user = await findUserByUsernamePassword(
      payload.username,
      payload.password
    );
    if (!user) return `Invalid account`;

    const { TOKEN_SECRET, TOKEN_EXPIRATION, TOKEN_ALGORITHM } = process.env;
    const payloadUser = { id: user.id, email: user.email };
    const algorithm = TOKEN_ALGORITHM;
    const key = TOKEN_SECRET;
    const expiresIn = s.from(m)(TOKEN_EXPIRATION);
    const token = jwt.sign(
      payloadUser,
      key,
      {
        expiresIn: expiresIn,
        algorithm: algorithm,
      },
      null
    );
    return token;
  };
  const logout = () => {};
  return { login, logout };
};
module.exports = AuthService;
