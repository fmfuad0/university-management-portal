import Student from "../models/Student.js";


export const getStudents = async (req, res) => {
    try {
        const students = await Student.find()
        // console.log(students)
        res.status(201).json({students});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findOne({studentId:req.params.studentId}).select("-password");
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: "Student deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
