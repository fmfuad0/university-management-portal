import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true },
    day: { type: String, required: true }, // e.g. Monday, Tuesday
    startTime: { type: String, required: true }, // "09:00"
    endTime: { type: String, required: true },   // "10:30"
    room: String,
});

export default mongoose.model("Schedule", scheduleSchema);
