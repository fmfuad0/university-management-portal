import Enrollment from '../models/enrollmentModel.js';

export const enrollStudent = async (req, res) => {
    try {
        const enrollment = await Enrollment.create(req.body);
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find().populate('student course');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
