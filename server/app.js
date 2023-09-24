import dotenv from "dotenv";
import express from "express";

const app = express();
export default app;

dotenv.config({
    path: "./config/config.env",
});

//Importing Routes
import userRoute from "./routes/user.js";

app.use("/api/v1", userRoute);