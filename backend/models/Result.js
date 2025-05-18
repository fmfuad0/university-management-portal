import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    marksObtained: { type: Number, required: true },
    grade: String,
    remarks: String,
});

export default mongoose.model("Result", resultSchema);
