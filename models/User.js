const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { Type: String },
  password: { Type: String },
  email: { Type: String },
  firstName: { Type: String },
  lastName: { Type: String },
});

module.exports = mongoose.model("User", UserSchema);
