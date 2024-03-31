const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
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
  console.log(req.file);
  // password hash
  const hasPassword = await bcrypt.hashSync(password, 10);
  // check for existing admin
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email: email });
    if (existingAdmin) {
      res.status(409).json({ error: " Email already registered" });
    } else {
      const admin = await Admin.create({
        name,
        email,
        profile_picture: newPath,
        password: hasPassword,
      });
      res.status(201).json({ message: "Registration Successful" });
    }
  } catch (error) {
    res.send(error.message);
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // find existing admin
    const admin = await Admin.findOne({ email: email });
    if (admin && admin._id) {
      // check password
      const isValidPassword = await bcrypt.compare(password, admin.password);
      console.log(isValidPassword);
      // if valid password then generate token
      if (isValidPassword) {
        // prepare admin information object for token
        const adminInfo = {
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          profile_picture: process.env.BASE_URL + admin.profile_picture,
          role: "admin",
          isLoggedIn: true,
        };
        // generate token
        const token = jwt.sign(adminInfo, process.env.JWT_SECRET_KEY, {
          expiresIn: process.env.JWT_EXPIRATION,
        });
        console.log(token);
        // set cookie
        res
          .status(200)
          .cookie("token", token, {
            // expiresIn: process.env.JWT_EXPIRATION,
            // maxAge: process.env.JWT_EXPIRATION,
            // // signed: true,
            // httpOnly: true,
          })
          .json(adminInfo);
      } else {
        res.status(404).send({ message: "Password does not exist" });
      }
    } else {
      res.status(404).json({ message: "Email not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const adminInfo = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET_KEY, {}, (error, info) => {
    if (error) throw error;
    res.json(info);
  });
  // console.log(token);
  // return res.json(token);
};
exports.adminInfo = adminInfo;
exports.login = login;
exports.register = register;
