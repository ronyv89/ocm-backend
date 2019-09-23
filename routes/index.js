const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.json({ status: 'success' });
  res.status(302).end()
});

module.exports = router;
