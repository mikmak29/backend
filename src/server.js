import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 2100;

const serverStarter = async () => {
	try {
		await connectDB();
		app.listen(port, () => {
			console.log(`Server is running at ${port}`);
		});
	} catch (error) {
		throw new Error({ SERVER: error.message });
	}
};

serverStarter();
