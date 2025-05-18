import express from 'express';
import { enrollStudent, getEnrollments } from '../controllers/enrollmentController.js';

const enrollmentRouter = express.Router();

enrollmentRouter.post('/', enrollStudent);
enrollmentRouter.get('/', getEnrollments);

export default enrollmentRouter;
