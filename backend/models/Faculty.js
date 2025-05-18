import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    email: { type: String, required: true, unique: true },
    phone: String,
    designation: String,
});

export default mongoose.model('Faculty', facultySchema);
