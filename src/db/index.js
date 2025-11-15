import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionString = process.env.MONGODB_URI;


        const connectInstance = await mongoose.connect(`${connectionString}/${DB_NAME}`);

        console.log(`\n mongoDB connected !! DB HOST: ${connectInstance.connection.host}`);

    } catch (error) {
        console.log("mongoDB connection Failed", error);
        process.exit(1);
    }
};


export default connectDB