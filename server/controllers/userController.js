const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "mentor-mind";
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const filesystem = require("fs");

const signup = async (req, res, next) => {
  const {
    fullname,
    username,
    profile_picture,
    email,
    password,
    student_id,
    about,
    role,
    approved,
  } = req.body;
};

const login = (req, res, next) => {};

exports.signup = signup;
exports.login = login;
