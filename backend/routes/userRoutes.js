const express = require("express");
const jwt = require("jsonwebtoken");

const { register } = require("../controllers/userController");
const { validateRegister } = require("../middlewares/validateRegister");

const router = express.Router();

router.post("/register",validateRegister,register);

module.exports = router;

