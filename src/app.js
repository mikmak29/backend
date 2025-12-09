import express from "express";
import route from "./routes/route.js";
import { globalMiddleware } from "./middlewares/globalErrorHandler.js";

const app = express();

app.use(express.json());
app.use("/", route);

app.use(globalMiddleware);

export default app;
