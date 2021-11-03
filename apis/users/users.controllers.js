const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { JWT_EXPIRATION_MS, JWT_SECRET } = require("../config/keys");

exports.signup = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);

    const payload = {
      _id: newUser._id,
      username: newUser.username,
      exp: Date.now() + JWT_EXPIRATION_MS,
    };

    const token = jwt.sign(payload, JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
