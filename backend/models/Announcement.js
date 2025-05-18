import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    datePosted: { type: Date, default: Date.now },
    expiresOn: Date,
});

export default mongoose.model("Announcement", announcementSchema);
