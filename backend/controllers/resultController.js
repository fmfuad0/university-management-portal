import Result from "../models/resultModel.js";

export const createResult = async (req, res) => {
    try {
        const result = await Result.create(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getResults = async (req, res) => {
    try {
        const results = await Result.find()
            .populate("student", "name")
            .populate("exam", "type date");
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateResult = async (req, res) => {
    try {
        const updated = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteResult = async (req, res) => {
    try {
        await Result.findByIdAndDelete(req.params.id);
        res.json({ message: "Result deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
