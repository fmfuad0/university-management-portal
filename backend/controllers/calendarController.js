import Calendar from "../models/calendarModel.js";

export const createCalendarEvent = async (req, res) => {
    try {
        const event = await Calendar.create(req.body);
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getCalendarEvents = async (req, res) => {
    try {
        const events = await Calendar.find().sort({ startDate: 1 });
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateCalendarEvent = async (req, res) => {
    try {
        const updated = await Calendar.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteCalendarEvent = async (req, res) => {
    try {
        await Calendar.findByIdAndDelete(req.params.id);
        res.json({ message: "Calendar event deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
