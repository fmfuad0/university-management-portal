import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true }, // e.g. "10:00"
    endTime: { type: String, required: true },
    location: String,
    type: { type: String, enum: ["Midterm", "Final", "Quiz"], required: true },
});

export default mongoose.model("Exam", examSchema);
