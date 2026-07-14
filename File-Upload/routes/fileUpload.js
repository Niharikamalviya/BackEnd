const express = require("express");
const router = express.Router();

const { imageUpload, localFileUpload } = require("../controller/fileUpload");

// router.post("/imageUpload", imageUpload);
// router.post("/videoUpload", videoUpload);
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);

module.exports = router;

