import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT, NODE_ENV } from "./config/env.js";
import { getUsers } from "./controllers/controller.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
// await connectDB();

app.get("/", getUsers);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});