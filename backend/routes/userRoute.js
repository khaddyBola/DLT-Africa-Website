const express = require("express");
const registerUser = require("../controllers/userController");
const router = express.Router();

router.post("/application-registration", registerUser);

module.exports = router;
