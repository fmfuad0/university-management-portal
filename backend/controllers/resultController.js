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
            // console.log(obj);
            for(const [key, value] of Object.entries(results)) {
                for(const [key2, value2] of Object.entries(value)){
                    obj[key2] = value2;
                }
                console.log(obj)
                console.log(count++)
                await Result.create(obj);
            }
        }
        // console.log(count);
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
        console.log(searchValue);
        if(searchValue.length === 0) {
            // console.log("Zero")
            const studentId = String(req.user.studentId); // Ensure type match with DB
            console.log("Fetching all results for:", studentId);
            const data = await Result.find({studentId})
            // console.log(data)
            res.status(201).json(data)
            return;
        }
        if (!searchValue || typeof searchValue !== 'string') {
            return res.status(400).json({ message: "Invalid search value" });
        }
        // console.log(req.user)
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
