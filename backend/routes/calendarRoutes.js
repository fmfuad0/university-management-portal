import express from "express";
import {
    createCalendarEvent,
    getCalendarEvents,
    updateCalendarEvent,
    deleteCalendarEvent,
} from "../controllers/calendarController.js";

const calenderRouter = express.Router();

calenderRouter.post("/", createCalendarEvent);
calenderRouter.get("/", getCalendarEvents);
calenderRouter.put("/:id", updateCalendarEvent);
calenderRouter.delete("/:id", deleteCalendarEvent);

export default calenderRouter;
