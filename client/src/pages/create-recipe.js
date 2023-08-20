import { useState } from 'react';
import { useGetUserID } from '../hooks/usGetUserID'; 
import axios from 'axios';
import "./styles/create-recipe.css";

export const CreateRecipe = () => {
    const userID = useGetUserID();

    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userID
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    // function to add ingredient
    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
    }

    const handleIngredientChange = (event, index) => {
        const { value } = event.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients });
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3000/recipes", recipe)
            alert("Recipe Created");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h2 className="page-heading">Create Recipe</h2>

            <form onSubmit={onSubmit}>
                <div className="card-details">
                    <div className="card-box">
                        <span className="details">Recipe Name</span>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="Enter recipe name" 
                            onChange={handleChange}
                        />
                    </div>

                    <div className="card-box">
                        <span className="details">Ingredients</span>

                        {recipe.ingredients.map((ingredient, index) => (
                            <div className='details' key={index}>
                            <input 
                                type='text' 
                                name='ingredient' 
                                value={ingredient}
                                placeholder= {"Ingredient " + (index + 1)}
                                onChange={(event) => handleIngredientChange(event, index)}
                            />
                            </div>
                        ))}

                        <div className="button">
                        <button type='button' onClick={addIngredient}>Add Ingredient</button>
                        </div>
                    </div>

                    <div className="card-box">
                        <span className="details">Instructions</span>
                        <textarea 
                            name="instructions" 
                            id="instructions" 
                            cols="30" 
                            rows="10" 
                            placeholder="Enter the steps" 
                            onChange={handleChange}>
                        </textarea>
                    </div>

                    <div className="card-box">
                        <span className="details">Image URL</span>
                        <input 
                            id="imageUrl" 
                            name="imageUrl" 
                            type="text" 
                            placeholder="Copy paste the image url" 
                            onChange={handleChange}
                        />
                    </div>

                    <div className="card-box">
                        <span className="details">Cooking Time (minutes)</span>
                        <input 
                            id="cookingTime" 
                            name="cookingTime" 
                            type="text" placeholder="Enter cooking time in minutes" 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="button">
                    <button type='submit'>Create Recipe</button>
                </div>
            </form>
            <div className='spacer'>Space to the footer </div>
        </div>
        
    );
}