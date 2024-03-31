const express = require("express");
const router = express.Router();
const {
  login,
  register,
  adminInfo,
} = require("../controllers/adminController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
router.post("/register", upload.single("profile_picture"), register);
router.post("/login", login);
router.get("/adminInfo", adminInfo);
module.exports = router;
