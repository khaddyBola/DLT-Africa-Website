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
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        if (!events) return res.status(201).json({ message: "No events found" });

        res.status(200).json(events);
    } catch (error) {
        console.error("Error getting the events:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getEvent = async (req, res) => {
    if (!req.params?.id) return res.status(400).json({ message: "Event ID is required" });

    try {
        const event = await Event.findOne({ _id: req.params.id }).exec();
        if (!event) return res.status(204).json({ message: `Event with ${req.params.id} not found` });

        res.status(200).json(event);
    } catch (error) {
        console.error("Error getting the event:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateEvent = async (req, res) => {
    try {
        if (!req?.body?.id) return res.status(400).json({ message: "Event ID is required" });

        const event = await Event.findOne({ _id: req.body.id }).exec();
        if (!event) return res.status(204).json({ message: `Event with ${req.body.id} not found` });

        if (req.file?.filename) event.filename = req.file.filename;
        if (req.body?.eventName) event.eventName = req.body.eventName;
        if (req.body?.eventCategory) event.eventCategory = req.body.eventCategory;
        if (req.body?.startDate) event.startDate = req.body.startDate;
        if (req.body?.duration) event.duration = req.body.duration;
        if (req.body?.eventDescription) event.eventDescription = req.body.eventDescription;
        if (req.body?.eventRegLink) event.eventRegLink = req.body.eventRegLink;
        if (req.body?.eventVenue) event.eventVenue = req.body.eventVenue;

        const result = event.save();

        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating event:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

};

const deleteEvent = async (req, res) => {
    try {
        if (!req?.body?.id) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const event = await Event.findOne({ _id: req.body.id }).exec();
        if (!event) {
            return res.status(404).json({ message: `Event with ID ${req.body.id} not found` });
        }

        const result = await Event.deleteOne({ _id: req.body.id }).exec();
        if (result.deletedCount === 1) {
            return res.status(200).json({ message: `Event with ID ${req.body.id} was deleted successfully` });
        } else {
            return res.status(500).json({ message: "Failed to delete event" });
        }
    } catch (error) {
        console.error("Error deleting event:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    createNewEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent,
};
