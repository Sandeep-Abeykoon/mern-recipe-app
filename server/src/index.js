import express from "express";
import cors from "cors";              // cors is to set rules of communication between the frontend and the backend
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Server running at port ${port}`));