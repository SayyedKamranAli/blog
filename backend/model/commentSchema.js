const mongoose = require("mongoose");

const newShema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Blog",
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("Comments", newShema);

module.exports = Comments;
