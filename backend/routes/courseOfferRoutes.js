import express from "express";
import {verifyJWT} from "../middleware/authMiddleware.js";
import {createCourseOffer, getCourseOffers} from "../controllers/courseOfferController.js";

export const courseOfferRouter = express.Router();

courseOfferRouter.route('/create').post(verifyJWT, createCourseOffer)
courseOfferRouter.route('/get-course-offers').post(verifyJWT, getCourseOffers)
