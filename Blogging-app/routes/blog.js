const express = require("express");
const router = express.Router();

//import
const { createBlog } = require("../controllers/createblog");
const { createComment } = require("../controllers/commentController");
const { dummyLink } = require("../controllers/likeController");


//API routes
router.post("/createblog", createBlog);
router.post("/comment/create", createComment);
router.get("/dummyroute", dummyLink)


module.exports = router;


