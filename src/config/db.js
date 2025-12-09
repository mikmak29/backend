import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGOURL = process.env.MONGO_URL;

const connectDB = async () => {
	try {
		await mongoose.connect(MONGOURL);
		const db = mongoose.connection.db.databaseName;

		console.log(`Database connected successfully ${db}`);
	} catch (error) {
		throw new Error({ Database: error.message });
	}
};

export default connectDB;
