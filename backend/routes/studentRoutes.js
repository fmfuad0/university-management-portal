import express from "express";
import {
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} from "../controllers/studentController.js";
import {verifyJWT} from "../middleware/authMiddleware.js";

const studentRouter = express.Router();

studentRouter.get("/",(req, res) => {res.json("OK")});

studentRouter.get("/get-all",   getStudents);
studentRouter.get("/:studentId",  verifyJWT,  getStudentById);
studentRouter.put("/update/:StudentId",  verifyJWT, updateStudent);
studentRouter.delete("/delete/:StudentId",  verifyJWT,  deleteStudent);

export default studentRouter;













