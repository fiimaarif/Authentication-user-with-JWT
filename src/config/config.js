const dotenv = require('dotenv');
const config = () => {
  dotenv.config();
  return {
    host: process.env.APP_HOST || 'localhost',
    port: process.env.APP_PORT || '8181',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || '8181',
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'Fima1212',
    dbName: process.env.DB_NAME || 'db_auth',
    dbDriver: process.env.DB_DRIVER || 'postgresql',
  };
};
module.exports = config;
