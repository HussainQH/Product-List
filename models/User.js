const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
