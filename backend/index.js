const express = require("express");
require("./db/mongoose");
const commentController = require("./controller/comment");
const blogController = require("./controller/blog");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(commentController);
app.use(blogController);

const port = 3200;

app.listen(port, () => {
  console.log(`server start on port: ${port}`);
});
