import express from 'express';
import mongoose from 'mongoose';
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json()
    } catch (error) {
        res.json(error);
    }
})

export { router as recipesRouter }
