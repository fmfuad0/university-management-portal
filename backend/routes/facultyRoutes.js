import express from 'express';
import { createFaculty, getAllFaculties } from '../controllers/facultyController.js';

const facultyRouter = express.Router();

facultyRouter.post('/', createFaculty);
facultyRouter.get('/', getAllFaculties);

export default facultyRouter;
