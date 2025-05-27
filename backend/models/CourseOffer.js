import mongoose, {Schema} from "mongoose";

const courseOfferSchema = new Schema({
    year: String,
    batch: String,
    semester: String,
    department: String,
    courses: [String],
})

export const CourseOffer = mongoose.model("CourseOffer", courseOfferSchema);
