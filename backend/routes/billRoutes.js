import express from "express";
import {createBill, getAllBills} from "../controllers/billController.js";
import {verifyJWT} from "../middleware/authMiddleware.js";

const billRoutes = express.Router();

billRoutes.get("/", (req, res) => {res.json("OK")})
billRoutes.post("/create",verifyJWT, createBill)
billRoutes.post("/get-all",verifyJWT, getAllBills)

export default billRoutes;
