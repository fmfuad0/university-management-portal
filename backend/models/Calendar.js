import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    startDate: { type: Date, required: true },
    endDate: Date,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String, enum: ["Holiday", "Event", "Deadline"], default: "Event" },
});

export default mongoose.model("Calendar", calendarSchema);
