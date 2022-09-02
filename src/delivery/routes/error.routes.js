const express = require('express');
const router = express.Router();
router.get('/error', (req, res) => {
  res.status(500).json({
    code: res.statusCode,
    message: `Oops, Internal server error`,
  });
});
module.exports = router;
