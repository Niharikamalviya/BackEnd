const express = require("express");
const router = express.Router();

//import
const { createBlog } = require("../controllers/createblog");


//API routes
router.post("/createblog", createBlog);


module.exports = router;


