import dotenv from "dotenv";
// import 'dotenv/config'
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/mongodb.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error in connecting to the database:", error);
    process.exit(1);
  });

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
