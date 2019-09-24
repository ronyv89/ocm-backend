const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

module.exports = {
  signup(req, res) {
    const salt = bcrypt.genSaltSync(10);
    const userParams = req.body.user;
    // eslint-disable-next-line no-param-reassign
    userParams.password = bcrypt.hashSync(userParams.password, salt);
    const user = new User(userParams);
    user.save().then(() => {
      res.json({ status: user });
    });
  },
};
