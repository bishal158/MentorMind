const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
      required: true,
    },
    attachment_option: {
      type: String,
      required: true,
      enum: ["yes", "no"],
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const noticeModel = mongoose.model("Admin", noticeSchema);

module.exports = noticeModel;
