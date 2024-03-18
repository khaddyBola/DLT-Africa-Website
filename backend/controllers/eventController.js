const Event = require("../models/eventModel");

const createNewEvent = async (req, res) => {
    console.log(req.file);
    console.log(req.file.filename);
    if (
        !req.file.filename ||
        !req.body.eventName ||
        !req.body.eventCategory ||
        !req.body.startDate ||
        !req.body.duration ||
        !req.body.eventDescription ||
        !req.body.eventRegLink ||
        !req.body.eventVenue
    ) {
        return res
            .status(400)
            .json({ message: "All field are required!" });
    }

    try {
        const newEvent = await Event.create({
            image: req.file.filename,
            eventName: req.body.eventName,
            eventCategory: req.body.eventCategory,
            startDate: req.body.startDate,
            duration: req.body.duration,
            eventDescription: req.body.eventDescription,
            eventRegLink: req.body.eventRegLink,
            eventVenue: req.body.eventVenue,
        });
        res.status(200).json(newEvent);
    } catch (error) {
        console.error(error);
    }
};

const getAllEvents = async (req, res) => { };
const getEvent = async (req, res) => { };
const updateEvent = async (req, res) => { };
const deleteEvent = async (req, res) => { };

module.exports = {
    createNewEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
};
