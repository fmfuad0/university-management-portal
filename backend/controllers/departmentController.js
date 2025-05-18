import Department from "../models/departmentModel.js";

export const createDepartment = async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json(department);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) return res.status(404).json({ message: "Department not found" });
        res.json(department);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateDepartment = async (req, res) => {
    try {
        const updated = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteDepartment = async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.json({ message: "Department deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
