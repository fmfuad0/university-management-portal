
import app from './app.js';
import dbConnect from "./config/dbConnect.js";
// [Import all other routes similarly]
const PORT = process.env.PORT || 5000;
dbConnect()
        .then(()=>app.listen(PORT, () => console.log(`Port : ${PORT}`)))
        .catch(err => console.log(err));

