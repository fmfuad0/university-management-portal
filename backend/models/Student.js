import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    registrationNumber: { type: String, required: true, unique: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    enrollmentYear: { type: Number, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

export default mongoose.model("Student", studentSchema);
