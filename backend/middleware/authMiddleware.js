import jwt from "jsonwebtoken";
import Student from "../models/Student.js";

export const verifyJWT = async (req, res, next) => {
    let token = req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const student = await Student.findOne({studentId:decoded._id}).select("-password");
            // console.log(student);
            req.user = student;
            if (!student) return res.status(401).json({ message: "Student not found" });
            // console.log("REQ: " , req.user);
            next();
        } catch (error) {
            return res.status(401).json({ message: "Not authorized, token failed" });
        }
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};
