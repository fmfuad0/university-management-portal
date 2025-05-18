import Exam from "../models/examModel.js";

export const createExam = async (req, res) => {
    try {
        const exam = await Exam.create(req.body);
        res.status(201).json(exam);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getExams = async (req, res) => {
    try {
        const exams = await Exam.find().populate("course", "name");
        res.json(exams);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateExam = async (req, res) => {
    try {
        const updated = await Exam.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteExam = async (req, res) => {
    try {
        await Exam.findByIdAndDelete(req.params.id);
        res.json({ message: "Exam deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
