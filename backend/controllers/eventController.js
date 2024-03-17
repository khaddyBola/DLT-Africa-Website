const Event = require("../models/eventModel");

const createNewEvent = async (req, res) => {
    if (
        !req.files.image ||
        !req.body.eventName ||
        !req.body.eventCategory ||
        !req.body.date ||
        !req.body.duration ||
        !req.body.eventDescription ||
        !req.body.eventRegLink ||
        !req.body.eventVenue
    ) {
        return res.status(400).json({ message: "All field required!" });
    }

    try {
        const newEvent = await Event.create({
            image: req.file.image,
            eventName: req.body.eventName,
            eventCategory: req.body.eventCategory,
            date: req.body.date,
            duration: req.body.duration,
            eventDescription: req.body.eventDescription,
            eventRegLink: req.body.eventRegLink,
            eventVenue: req.body.eventVenue,
        })
    } catch (error) {

    }
};
const getAllEvents = async (req, res) => { };
const getEvent = async (req, res) => { };
const updateEvent = async (req, res) => { };
const deleteEvent = async (req, res) => { };


module.exports = { createNewEvent, getAllEvents, getEvent, updateEvent, deleteEvent };