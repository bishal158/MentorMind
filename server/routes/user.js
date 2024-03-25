const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const filesystem = require("fs");

router.post("/signup", signup);

module.exports = router;
