import {CourseOffer} from "../models/CourseOffer.js";

export const createCourseOffer = async (req, res) => {
    const data = req.body;
    for(const courseOffer of data) {
        await CourseOffer.create(courseOffer)
    }
    res.status(200).json(await CourseOffer.find())
};

export const getCourseOffers = async (req, res) => {
    const {year, semester, batch} = req.body;
    const result = await CourseOffer.find({year, semester, batch})
    return res.status(200).json(result)
}