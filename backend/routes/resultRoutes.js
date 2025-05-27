import express from "express";
import {
    createResult,
    getResults,
    updateResult,
    deleteResult,
} from "../controllers/resultController.js";
import {verifyJWT} from "../middleware/authMiddleware.js";

const resultRouter = express.Router();

resultRouter.post("/create",verifyJWT, createResult);
resultRouter.post("/get-all",verifyJWT, getResults);
resultRouter.put("/update/:id", updateResult);
resultRouter.delete("/delete/:id", deleteResult);

export default resultRouter;
