const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const fileUploads = require("../middleware/uploads");

router
    .post("/", fileUploads, eventController.createNewEvent)
    .get("/")







module.exports = router;