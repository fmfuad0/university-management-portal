import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    credits: { type: Number, required: true },
    description: String,
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
});

export default mongoose.model("Course", courseSchema);
