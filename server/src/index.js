import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";              // cors is to set rules of communication between the frontend and the backend
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://recipeApp:${DB_PASSWORD}@recipes.ac4tdjw.mongodb.net/?retryWrites=true&w=majority`);

app.listen(port, () => console.log(`Server running at port ${port}`));