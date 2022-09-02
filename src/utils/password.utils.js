const bcrypt = require('bcryptjs');

const passwordUtil = async (password) => {
  const saltPassword = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, saltPassword);
};

const passwordCompare = async (password, hasPassword) => {
  return await bcrypt.compare(password, hasPassword);
};

module.exports = { passwordUtil, passwordCompare };
