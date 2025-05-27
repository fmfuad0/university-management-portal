import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    presentAddress: { type: String, required: true},
    permanentAddress: { type: String, required: true},
    phoneNumber: { type: String, required: true},
    dateOfBirth:{type:String,required:true},
    gender:{type:String,required:true, enum:['Male','Female','Other']},
    fatherName:{type:String,required:true},
    motherName:{type:String,required:true},
    guardianContact:{type:String,required:true},
    maritalStatus:{type:String,required:true},
    nationality:{type:String,required:true},
    religion:{type:String,required:true},
    program: { type: String, required: true }, ///Regular or Evening batch
    batch: { type: String, required: true },
    activeStatus: { type: Boolean, default: true },
    department: { type:String, required: true },
    enrollmentYear: { type: String, required: true },
    coursesCompleted: [String],
    coursesEnrolled: [String],
    semester: { type: String, required: true },
    admissionStatus:{type:String, enum: ["Normal", "Suspended", "Canceled"], default: "Normal"}
});

export default mongoose.model("Student", studentSchema);
