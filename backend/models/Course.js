import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    courseCode: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    credit: { type: Number, required: true },
    prerequisites: String,
    brief: String,
});

export default mongoose.model("Course", courseSchema);