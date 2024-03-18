const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const fileUploads = require("../middleware/uploads");

router.route("/")
    .post(fileUploads, eventController.createNewEvent)
    .get(eventController.getAllEvents)







module.exports = router;