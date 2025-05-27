import mongoose from "mongoose";
import Section from "../models/Section.js";
import Student from "../models/Student.js";
import {CourseOffer} from "../models/CourseOffer.js";
import Course from "../models/Course.js";

export const createSection = async function(req, res) {
    // const {name, courseCode, courseTitle, capacity, assignedFaculty, classTime, year, semester, batch} = req.body;
    // if(!name || !courseCode || !courseTitle || !capacity || assignedFaculty || !classTime || !year || !semester || !batch) {
    //     res.status(500).json({message: "Provide all information(name, courseCode, capacity, assignedFaculty, classTime, year, semester, batch)."});
    // }
    // const temp = await Section.findOne({name, courseCode, year, semester, batch})
    // if(temp){
    //     res.status(500).json({message: "Section already exists"});
    // }
    // const createdSection = new Section({name, courseCode, courseTitle, capacity, assignedFaculty, classTime, year, semester, batch});
    // await createdSection.save();
    // return res.status(201).json({data:createdSection, message: "Section created"});

    let c=0;
    const data = req.body;
    for(const section of data) {
        await Section.create(section);
    }
    res.status(200).json(await Section.find());
}

export const toggleSectionRegister = async function(req, res) {
    const {studentId,sectionId, operation} = req.params;
    const student = await Student.findOne({studentId})
    if (!student) {
        return res.status(400).json({message: "Student not found"});
    }
    const section = await Section.findById(sectionId)
    if (!section) {
        return res.status(400).json({message: "Section not found"});
    }
    switch(operation) {
        case "rm":{
            if(section.registeredStudents.includes(studentId)){
                const response = await Section.findByIdAndUpdate(sectionId,{$pull:{registeredStudents: studentId}}, {new:true});
                await Student.findByIdAndUpdate(student._id, {$pull:{coursesEnrolled:section.courseCode}})
                return res.status(200).json(response)
            }
            return res.status(404).json("Student not registered");
        }
        case "rq":{
            const ver =section.waitList.includes(studentId)
            let response;
            if(ver) response = await Section.findByIdAndUpdate(sectionId,{$pull:{waitList: studentId}}, {new:true});
            else response = await Section.findByIdAndUpdate(sectionId,{$push:{waitList: studentId}}, {new:true});
            return res.status(200).json((ver? 'Request Cancelled' : 'Request Confirmed'));
        }
        default:{
            if(!section.registeredStudents.includes(studentId)){
                const response = await Section.findByIdAndUpdate(sectionId,{$push:{registeredStudents: studentId}}, {new:true});
                await Student.findByIdAndUpdate(student._id, {$push:{coursesEnrolled:section.courseCode}})

                return res.status(200).json(response)
            }
            return res.status(404).json("Student already registered");
        }
    }
}

export const updateSection = async function(req, res) {
    const {name, courseCode, courseTitle, capacity, assignedFaculty, classTime, year, semester, batch} = req.body;
    const {sectionId} = req.params;
    const section = await Section.findById(new mongoose.Types.ObjectId(sectionId));
    if(!section) {
        res.status(404).json({message: "Section not found"});
    }
    const updatedSection = await Section.findByIdAndUpdate(new mongoose.Types.ObjectId(sectionId), {name, courseCode, courseTitle, capacity, assignedFaculty, classTime, year, semester, batch})
    res.status(200).json({data:updatedSection, message: "Section updated"});
}

export const deleteSection = async function(req, res) {
    const {sectionId} = req.params;
    const section =  await Section.findById(new mongoose.Types.ObjectId(sectionId))
    if(!section) {
        res.status(404).json({message: "Section not found"});
    }
    await Section.findByIdAndDelete(new mongoose.Types.ObjectId(sectionId))
    res.status(200).json({message:"Section deleted"});
}

export const getSectionById = async function(req, res) {
    const {sectionId} = req.params;
    if(!sectionId) {
        res.status(404).json({message: "Section ID is not provided"});
    }
    const section = await Section.findById(new mongoose.Types.ObjectId(sectionId))
    if(!section) {
        res.status(404).json({message: "Section not found"});
    }
    res.status(200).json({data:section, message: "Section found"});
}

export const getSections = async function(req, res) {
    const {batch}=req.body;
    const sections = await Section.find({batch})
    res.status(200).json({data:sections, message: "Sections fetched"});
}

export const getEnrolledSections = async function(req, res) {
    const {year, semester} = req.body
    const sections = await Section.find({year, semester, registeredStudents: {$in:[req.user.studentId]}})
    res.status(200).json(sections);
}

export const getSectionsForPreRegistration = async function(req, res) {
    const {studentId} = req.params;
    const {year, semester} = req.body;
    if(!studentId) {
        res.status(404).json({message: "StudentId not found"});
    }
    const student = await Student.findOne({studentId});
    if(!student) {
        res.status(404).json({message: "Student not found"});
    }
    ///offeredCourseCodes
    const courseCodes = (await CourseOffer.find({year, semester, batch:student.batch}))[0].courses
    const allowedCourses = await Promise.all(courseCodes.map(async courseCode => {
        const course = await Course.findOne({courseCode});
        if(!course) {
            res.status(404).json({message: "Course not found"});
        }
        if(course.prerequisites==='None') return courseCode;
        else if(student.coursesCompleted.includes(course.prerequisites)) return courseCode
        return ""
    }))
    // console.log(student.batch)
    // console.log(courseCodes)
    const sections = await Section.find({semester, year, courseCode: {$in:allowedCourses}, batch:student.batch})
    //
    // console.log("Sections : ", sections.length)
    res.status(200).json({data: sections, message: "Sections fetched"});
}