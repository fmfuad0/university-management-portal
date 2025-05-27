import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    studentId: { type:String, required: true },
    courseCode: { type:String, required: true },
    marksObtained: { type: Number, required: true },
    grade: String,
    remarks: String,
    semester: String,
    year: String,
});

export default mongoose.model("Result", resultSchema);
