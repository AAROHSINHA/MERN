const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 128,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 128,
  },
});

const User = mongoose.model("User", UserModel);
module.exports = User;
