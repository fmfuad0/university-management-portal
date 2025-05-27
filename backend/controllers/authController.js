import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";

// Generate JWT Token
const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

export const registerStudent = async (req, res) => {
    try {
        const data = req.body;
        for(const student of data) {
            const {studentId,fullName,email,password,presentAddress,permanentAddress,phoneNumber, dateOfBirth,fatherName,motherName,guardianContact,maritalStatus,nationality,religion,program,batch,activeStatus,department,enrollmentYear, gender, semester} = student;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            await Student.create({studentId,fullName,email,password:hash,presentAddress,permanentAddress,phoneNumber, dateOfBirth,fatherName,motherName,guardianContact,maritalStatus,nationality,religion,program,batch,activeStatus,department,enrollmentYear, gender, semester});

        }
        const dd = await Student.find()
        res.status(201).json({dd});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const loginStudent = async (req, res) => {
    const { studentId, password } = req.body;

    const student = await Student.findOne({studentId});
    if (!student) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials2" });
    }
    student.password=""
    const token = generateToken(student.studentId)
    res.status(200).cookie("token", token).json({student, token});
};

