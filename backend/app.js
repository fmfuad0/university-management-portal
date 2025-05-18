import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import examRoutes from "./routes/examRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/faculties", facultyRoutes);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/calendars", calendarRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/departments", departmentRoutes);

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.error(err));
