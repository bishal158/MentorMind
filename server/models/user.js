const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  about: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["mentee", "mentor"],
  },
  approved: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
