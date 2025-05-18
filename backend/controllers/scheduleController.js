import Schedule from "../models/scheduleModel.js";

export const createSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(201).json(schedule);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find()
            .populate("course", "name")
            .populate("faculty", "name");
        res.json(schedules);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateSchedule = async (req, res) => {
    try {
        const updated = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteSchedule = async (req, res) => {
    try {
        await Schedule.findByIdAndDelete(req.params.id);
        res.json({ message: "Schedule deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
