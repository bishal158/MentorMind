const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/adminController");
const multer = require("multer");
const filesystem = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
router.post("/register", upload.single("profile_picture"), register);
router.post("/login", login);

module.exports = router;
