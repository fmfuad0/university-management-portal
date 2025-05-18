import express, {Router} from "express";
import {
    createSchedule,
    getSchedules,
    updateSchedule,
    deleteSchedule,
} from "../controllers/scheduleController.js";

const scheduleRouter = Router();

scheduleRouter.post("/", createSchedule);
scheduleRouter.get("/", getSchedules);
scheduleRouter.put("/:id", updateSchedule);
scheduleRouter.delete("/:id", deleteSchedule);

export default scheduleRouter;
