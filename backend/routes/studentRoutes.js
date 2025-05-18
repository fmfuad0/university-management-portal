import express from "express";
import {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/", createStudent);
studentRouter.get("/", getStudents);
studentRouter.get("/:id", getStudentById);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

export default studentRouter;
