const express = require("express");
const router = express.Router();

const { login, signup } = require("../controller/Auth");

router.post("/login", login);
router.post("/signup", signup);

model.exports = router;