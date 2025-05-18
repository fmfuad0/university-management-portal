import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please add all fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: role || "student", // default to student role
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
};

// @desc    Authenticate user & get token (login)
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
    });
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
