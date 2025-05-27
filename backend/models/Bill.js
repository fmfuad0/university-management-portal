import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
    studentId:{type:String, required: true},
    feeType:String,
    courseCode:String,
    credit:Number,
    amount: Number,
    discount:Number,
    payment:Number,
    trimester:String,
    date:String,
    remark:String,
    year:String,
})

const Bill = mongoose.model("Bill", billSchema);

export default Bill;