import express from 'express';
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from '../models/Users.js';

const router = express.Router();


// To get all the recipes
router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});


// To save a new recipe
router.post("/", async (req, res) => {
    const recipe = new RecipeModel(req.body);

    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});


// To update user's saved recipes
router.put("/", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID)

        // Adding the recipe if it is not already saved (Avoiding duplicate saving)
        const initialLength = user.savedRecipes.length;

        await UserModel.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: {savedRecipes: req.body.recipeID} },
            { new: true, useFindAndModify: false }
        );

        // Checking if the new recipe is added or was already there
        if (initialLength === user.savedRecipes.length) {
            return res.json({ message: "Recipe was already saved" });
        }
        return res.json({ message: "Recipe succesfully saved" });

    } catch (error) {
        res.json(error);
    }
});


// To get all the recipes ID's of a particular user
router.get("/savedRecipes/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        res.json(error);
    }
});


// To get all the recipes of a particular user
router.get("/savedRecipes", async(req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes }
        });
        res.json({ savedRecipes })
    } catch (error) {
        res.json(error);
    }
})

export { router as recipesRouter }
