const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  skills: {
    type: mongoose.Types.ObjectId,
    ref: "Skill",
  },
});

const mentorModel = mongoose.model("Mentor", mentorSchema);

module.exports = mentorModel;
