import express from "express";
import {
  createPayment,
  getPayments,
  updatePayment,
  deletePayment,
} from "../controllers/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post("/", createPayment);
paymentRouter.get("/", getPayments);
paymentRouter.put("/:id", updatePayment);
paymentRouter.delete("/:id", deletePayment);

export default paymentRouter;
