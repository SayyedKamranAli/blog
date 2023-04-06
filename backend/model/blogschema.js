const mongoose = require("mongoose");

const newShema = new mongoose.Schema(
  {
    blogHeading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", newShema);

module.exports = Blog;
