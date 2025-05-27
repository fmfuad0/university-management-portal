import express from "express";
import {
    loginStudent,
    registerStudent,
} from "../controllers/authController.js";

import { verifyJWT } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerStudent);
authRouter.post("/login", loginStudent);

export default authRouter;
