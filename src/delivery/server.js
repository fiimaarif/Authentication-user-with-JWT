const express = require('express');
const config = require('../config/config');
const errorRoute = require('./routes/error.routes');
const noRoute = require('./routes/no.routes');
const jsonMiddleware = require('./middleware/json.middleware');
const errorMiddleWare = require('./middleware/error.middleware');
const appRoute = require('./routes/index');
require('dotenv').config();
const { port, host } = config();

const Server = () => {
  const app = express();
  app.use(jsonMiddleware);
  app.use(appRoute);
  app.use(errorRoute);
  app.use(noRoute);
  app.use(errorMiddleWare);

  app.listen(port, host, () => {
    console.log(`App server running on port ${port}`);
  });
};

module.exports = Server;
