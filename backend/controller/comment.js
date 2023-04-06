const express = require("express");

const router = new express.Router();

const commentModel = require("../model/commentSchema");

// Register apis
// Add Comments Api
router.post("/AddComment", async (req, res) => {
  const comment = new commentModel(req.body);

  try {
    const newComment = await comment.save();
    res.status(200).json({
      message: "comment add successfully",
      data: newComment,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

// get OneUser Comment 
router.get("/GetBlogComments/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const newComment = await commentModel
      .find({ blogId: _id })
      .sort({ createdAt: 1 });
    res.status(200).json({
      message: "all comments",
      data: newComment,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
});

module.exports = router;
