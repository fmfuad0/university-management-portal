import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, enum: ["Credit Card", "Bank Transfer", "Cash", "Mobile Payment"], required: true },
    status: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
    remarks: String,
});

export default mongoose.model("Payment", paymentSchema);
