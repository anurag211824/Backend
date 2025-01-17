import dotenv from "dotenv";
// import 'dotenv/config'
import mongoose from "mongoose";
import {DB_NAME} from "./constant.js";
import connectDB from "./db/mongodb.js";

dotenv.config({
    path:'./env'
});


connectDB();







// import express from express;
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on('error',()=>console.log('Error in connecting to the database'));

//     app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);

//     })
//   } catch (error) {
//     console.log("ERROR:", error);
//     throw error;
//   }
// })();
