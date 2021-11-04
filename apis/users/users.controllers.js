const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { JWT_EXPIRATION_MS, JWT_SECRET } = require("../config/keys");

exports.signup = async (req, res, next) => {
  const { password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.password = hashedPassword;

    console.log(req.body);

    const newUser = await User.create(req.body);

    // const payload = {
    //   _id: newUser._id,
    //   username: newUser.username,
    //   exp: Date.now() + JWT_EXPIRATION_MS,
    // };

    // const token = jwt.sign(payload, JWT_SECRET);
    // console.log(hashedPassword);

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

exports.signin = (req, res) => {
  const payload = {
    _id: req.user._id,
    username: req.user.username,
    exp: Date.now() + JWT_EXPIRATION_MS,
  };

  const token = jwt.sign(payload, JWT_SECRET);

  res.json({ token });
};
