const router = require('express').Router({ mergeParams: true });
const { signup } = require('../controllers/auth.controller');

router.post('/signup', signup);

module.exports = router;
