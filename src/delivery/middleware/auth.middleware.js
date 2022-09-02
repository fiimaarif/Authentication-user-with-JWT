const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const AuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      res.status(402).send('unauthorized');
    }
    const token = authHeader.replace('Bearer ', '');
    if (!token) jwt.verify(token, process.env.TOKEN_SECRET, '', null);
    next();
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
module.exports = AuthMiddleware;
