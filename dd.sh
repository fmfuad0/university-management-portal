#!/bin/bash

mkdir -p backend/{controllers,middleware,models,routes,utils,config}

# Create starter files in controllers
touch backend/controllers/{authController.js,departmentController.js,facultyController.js,studentController.js,courseController.js,enrollmentController.js,scheduleController.js,examController.js,resultController.js,announcementController.js,paymentController.js,calendarController.js}

# Create starter files in middleware
touch backend/middleware/{authMiddleware.js,errorMiddleware.js,roleMiddleware.js}

# Create starter files in models
touch backend/models/{User.js,Department.js,Faculty.js,Student.js,Course.js,Enrollment.js,Schedule.js,Exam.js,Result.js,Announcement.js,Payment.js,Calendar.js}

# Create starter files in routes
touch backend/routes/{authRoutes.js,departmentRoutes.js,facultyRoutes.js,studentRoutes.js,courseRoutes.js,enrollmentRoutes.js,scheduleRoutes.js,examRoutes.js,resultRoutes.js,announcementRoutes.js,paymentRoutes.js,calendarRoutes.js}

# Create starter files in utils
touch backend/utils/{db.js,logger.js,mailer.js,validator.js}

# Create starter config file
touch backend/config/dbConnect.js
touch backend/{server.js,app.js,package.json}

echo "Full backend structure with files created!"
