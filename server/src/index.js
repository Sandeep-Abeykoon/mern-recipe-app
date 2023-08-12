import { config } from 'dotenv';
import express from "express";
import cors from "cors";              // cors is to set rules of communication between the frontend and the backend
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

config({ path: '../.env'});
const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://recipeApp:${encodedPassword}@recipes.ac4tdjw.mongodb.net/?retryWrites=true&w=majority`);

app.listen(port, () => console.log(`Server running at port ${port}`));