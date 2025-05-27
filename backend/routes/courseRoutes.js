import express from "express";
import {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse, getSelectedCourses, getEnrolledCourses,
} from "../controllers/courseController.js";
import {verifyJWT} from "../middleware/authMiddleware.js";

const courseRouter = express.Router();

courseRouter.post("/create",verifyJWT, createCourse);
courseRouter.get("/get-all",verifyJWT, getCourses);
courseRouter.get("/get/:id",verifyJWT, getCourseById);
courseRouter.post("/get-enrolled-courses",verifyJWT, getEnrolledCourses);
courseRouter.get("/get-registered-courses/:studentId/:year/:semester",verifyJWT, getSelectedCourses);


courseRouter.put("/update/:id", updateCourse);
courseRouter.delete("/delete/:id", deleteCourse);

export default courseRouter;