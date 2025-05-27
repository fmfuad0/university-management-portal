import Course from "../models/Course.js";
import Section from "../models/Section.js";
import Student from "../models/Student.js";
export const createCourse = async (req, res) => {
    try {
        // let c=0;
        // const data = req.body;
        // for(const [key, item] of Object.entries(data)) {
        //     if(item.title && item.courseCode && item.department && item.brief && item.credit){
        //         console.log(item)
        //         console.log("found")
        //         await Course.create(item)
        //         console.log(c++)
        //     }
        // }
        // res.status(201).json(await Course.find())
        const course = await Course.create(req.body);
        res.status(201).json(course);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find().select("courseCode title credit -_id")
        courses.sort((a,b)=> {
            return parseInt(a.courseCode.split(' ')[1]) - parseInt(b.courseCode.split(' ')[1])
        })
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: "Course deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const getEnrolledCourses = async (req, res) => {
    const {year, semester} = req.body
    const courseCodes = (await Student.findOne({studentId:req.user.studentId}).select("coursesEnrolled -_id")).coursesEnrolled
    const courses = await Course.find({courseCode: {$in:courseCodes}})
    console.log(courses)
    res.status(200).json(courses);
}

export const getSelectedCourses = async (req, res) => {
    try {
        const { studentId, semester, year } = req.params;
        console.log(semester, year, studentId);
        const sections = await Section.find({semester, year, registeredStudents: { $in: [studentId] }}).select("name courseTitle courseCode classTime courseCredit -_id")
        res.status(200).json(sections);
    } catch (error) {
        console.error("Error fetching registered courses:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
