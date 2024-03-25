const Admin = require("../models/admin");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const multer = require("multer");
const filesystem = require("fs");

const register = async (req, res, next) => {
  // file handle
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const extension = parts[parts.length - 1];
  const newPath = path + "." + extension;
  filesystem.renameSync(path, newPath);
  // destructure data
  const { name, email, password } = req.body;
  // password hash
  const hasPassword = await bcrypt.hashSync(password, 10);
  // check for existing admin
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email: email });
    if (existingAdmin) {
      return res.status(409).json({ error: " Email already registered" });
    } else {
      const admin = await Admin.create({
        name,
        email,
        profile_picture: newPath,
        password: hasPassword,
      });
      return res
        .status(201)
        .json({ admin: admin, message: "Registration Successful" });
    }
  } catch (error) {
    res.send(error.message);
  }
};
const login = (req, res, next) => {};

exports.login = login;
exports.register = register;
