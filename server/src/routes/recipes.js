import express from 'express';
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})


router.post("/", async (req, res) => {
    const recipe = new RecipeModel(req.body);

    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

export { router as recipesRouter }
