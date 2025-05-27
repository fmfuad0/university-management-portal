import Payment from "../models/Payment.js";

export const createPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};

export const getPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate("student", "name");
        res.json(payments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updatePayment = async (req, res) => {
    try {
        const updated = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deletePayment = async (req, res) => {
    try {
        await Payment.findByIdAndDelete(req.params.id);
        res.json({ message: "Payment deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
