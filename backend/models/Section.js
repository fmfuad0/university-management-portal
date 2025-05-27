import mongoose from "mongoose";

const sectionSchema =new mongoose.Schema({
    name:{type: String,required: true,},
    batch: {type: String, default: "All"},
    courseTitle:{type: String, required: true},
    courseCode:{type:String, required: true},
    courseCredit:{type:Number, required: true},
    capacity:{type:Number, required: true},
    assignedFaculty:{type:String, default:"Not Assigned yet."},
    registeredStudents:[String],
    waitList:[String],
    classTime:{type:Object},
    semester:String,
    year:String
})

const Section = mongoose.model("Section", sectionSchema);
export default Section;