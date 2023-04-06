const express = require("express");

const router = new express.Router();

const blogModel = require("../model/blogschema");

// Register apis

//Create Blog Api
router.post("/AddBlog", async (req, res) => {
  const user = new blogModel(req.body);

  try {
    const newBlog = await user.save();
    res.status(200).json({
      message: "blog created successfully",
      data: newBlog,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

// Get Blog List Data
router.get("/GetBlogList", async (req, res) => {
  try {
    const newBlog = await blogModel
      .find({}, { content: 0, __v: 0 })
      .sort({ createdAt: -1 });
    res.status(200).json({
      message: "all blog list",
      data: newBlog,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

//Get Blog Content Data
router.get("/GetBlogContent/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const newBlog = await blogModel
      .find({ _id: _id }, { createdAt: 0, updatedAt: 0, __v: 0 })
      .sort({ createdAt: -1 });
    res.status(200).json({
      message: "all content",
      data: newBlog,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

module.exports = router;
