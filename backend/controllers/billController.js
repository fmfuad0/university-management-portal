import Bill from "../models/Bill.js";
import mongoose from "mongoose";
import Result from "../models/Result.js";

export const createBill = async (req, res) => {
    try {
        // const bill  = new Bill(req.body);
        // await  bill.save();
        // res.status(201).json({bill})

        const data = req.body;
        for(const bill of data){
            console.log(bill);
            await Bill.create(bill);
        }
        res.status(201).json(await Bill.find())

    }catch(err) {
        res.status(400).json({ message: err.message });
    }
}

export const getBillById = async (req, res) => {

    try {
        const {billId} = req.params;
        const bill = await Bill.findById(new mongoose.Types.ObjectId(billId))
        if(!bill){
            res.status(404).json({message:"No bill with this ID"})
        }
        res.status(201).json({bill})
    }catch(err) {
        res.status(400).json({ message: err.message });
    }
}

export const getAllBills = async (req, res) => {
    const { searchValue } = req.body;
    console.log(searchValue);
    console.log(req.user.studentId);
    if (searchValue?.length === 0) {
        console.log("Zero");
        const bills = await Bill.find({studentId: req.user.studentId});
        return res.status(200).json(bills);
    }

    if (!searchValue || typeof searchValue !== 'string') {
        return res.status(400).json({ message: "Invalid search value" });
    }

    const numberSearch = parseFloat(searchValue);
    const isNumeric = !isNaN(numberSearch);

    const searchQuery = {
         studentId: req.user.studentId,
        $or: [
            { feeType: { $regex: searchValue, $options: 'i' } },
            { courseCode: { $regex: searchValue, $options: 'i' } },
            { trimester: { $regex: searchValue, $options: 'i' } },
            { date: { $regex: searchValue, $options: 'i' } },
            { remark: { $regex: searchValue, $options: 'i' } },
            { year: { $regex: searchValue, $options: 'i' } },
            ...(isNumeric ? [{ credit: numberSearch }] : []),
            ...(isNumeric ? [{ amount: numberSearch }] : []),
            ...(isNumeric ? [{ payment: numberSearch }] : []),
            ...(isNumeric ? [{ discount: numberSearch }] : [])
        ]
    };

    try {
        const results = await Bill.find(searchQuery);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
