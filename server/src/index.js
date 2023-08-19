import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";              // cors is to set rules of communication between the frontend and the backend
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';
import { recipesRouter } from './routes/recipes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://sandeepchanura:${DB_PASSWORD}@cluster0.y1rsccz.mongodb.net/Recipes?retryWrites=true&w=majority`);

app.listen(port, () => console.log(`Server running at port ${port}`));