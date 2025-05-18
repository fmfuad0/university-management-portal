import express from "express";
import {
    createResult,
    getResults,
    updateResult,
    deleteResult,
} from "../controllers/resultController.js";

const resultRouter = express.Router();

resultRouter.post("/", createResult);
resultRouter.get("/", getResults);
resultRouter.put("/:id", updateResult);
resultRouter.delete("/:id", deleteResult);

export default resultRouter;
