import express from "express";
import {
    createExam,
    getExams,
    updateExam,
    deleteExam,
} from "../controllers/examController.js";

const examRouter = express.Router();

examRouter.post("/", createExam);
examRouter.get("/", getExams);
examRouter.put("/:id", updateExam);
examRouter.delete("/:id", deleteExam);

export default examRouter;
