import Faculty from '../models/faculty.js';

export const createFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.create(req.body);
        res.status(201).json(faculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find().populate('department');
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
