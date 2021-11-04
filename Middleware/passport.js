const bcrypt = require("bcrypt");
const User = require("../models/User");
const LocalStrategy = require("passport-local").Strategy;

exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });

    if (user) {
      const passwordsMatch = await bcrypt.compare(password, user.password);

      if (passwordsMatch) {
        return done(null, user);
      } else {
        return done(null, error);
      }
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(error);
  }
});
