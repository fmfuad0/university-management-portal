import Result from "../models/Result.js";

export const createResult = async (req, res) => {
    try {
        let count=0
        const data = req.body;
        for (const [index, result] of Object.entries(data)) {
            let obj = {};
            let results={};
            for (const [key, value] of Object.entries(result)) {
                if (key !== "results") {
                    obj[key] = value;
                }else results = value
            }
            for(const [key, value] of Object.entries(results)) {
                for(const [key2, value2] of Object.entries(value)){
                    obj[key2] = value2;
                }
                await Result.create(obj);
            }
        }
        res.status(201).json(await Result.find());

        // const result = await Result.create(req.body);
        // res.status(201).json({result});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

export const getResults = async (req, res) => {
    try {
        const { searchValue } = req.body;
        if(searchValue.length === 0) {
            const studentId = String(req.user.studentId); // Ensure type match with DB
            const data = await Result.find({studentId})
            res.status(201).json(data)
            return;
        }
        if (!searchValue || typeof searchValue !== 'string') {
            return res.status(400).json({ message: "Invalid search value" });
        }
        const numberSearch = parseFloat(searchValue);
        const isNumeric = !isNaN(numberSearch);
        const searchQuery = {
            studentId: req.user.studentId,
            $or: [
                { courseCode: { $regex: searchValue, $options: 'i' } },
                { grade: { $regex: searchValue, $options: 'i' } },
                { remarks: { $regex: searchValue, $options: 'i' } },
                { semester: { $regex: searchValue, $options: 'i' } },
                { year: { $regex: searchValue, $options: 'i' } },
                ...(isNumeric ? [{ marksObtained: numberSearch }] : []),
                ...(isNumeric ? [{ credit: numberSearch }] : [])
            ]
        };


        const results = await Result.find(searchQuery);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateResult = async (req, res) => {
    try {
        const updated = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteResult = async (req, res) => {
    try {
        await Result.findByIdAndDelete(req.params.id);
        res.json({ message: "Result deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
