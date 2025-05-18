import Course from "../models/courseModel.js";

export const createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate("department", "name")
            .populate("faculty", "name");
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate("department", "name")
            .populate("faculty", "name");
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: "Course deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
