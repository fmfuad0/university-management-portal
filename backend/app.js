import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/authRoutes.js";
import studentRouter from "./routes/studentRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import resultRouter from "./routes/resultRoutes.js";
import announcementRouter from "./routes/announcementRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import sectionRouter from "./routes/sectionRoutes.js";
import billRouter from "./routes/billRoutes.js";
import {createBill, getAllBills} from "./controllers/billController.js";
import {courseOfferRouter} from "./routes/courseOfferRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use('/auth', authRoutes);
// [Use all other routes here]

app.get('/', (req, res) => {
    res.send('University Management System API');
});

app.use(cors());
app.use(express.json());

// Routes

app.use('/bill', billRouter);
app.use("/student", studentRouter);
app.use("/result", resultRouter);
app.use("/announcement", announcementRouter);
app.use("/payment", paymentRouter);
app.use("/auth", authRouter);
app.use("/course", courseRouter);
app.use("/section", sectionRouter)
app.use("/course-offer", courseOfferRouter)



export default app;