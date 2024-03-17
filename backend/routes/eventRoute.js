const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const fileUploads = require("../middleware/uploads");

router
    .post("/api/create-events", fileUploads("./storage/images"), eventController.createNewEvent)
    .get()


module.exports = router;