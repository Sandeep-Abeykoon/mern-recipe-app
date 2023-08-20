import { useState } from 'react';
import "./styles/create-recipe.css";

export const CreateRecipe = () => {

    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: 0
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setRecipe({ ...recipe, [name]: value });
    }

    return (
        <div className="container">
            <h2 className="page-heading">Create Recipe</h2>

            <form action="#">
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
                        <span className="details">Description</span>
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10" 
                            placeholder="Enter the steps" 
                            onChange={handleChange}>
                        </textarea>
                    </div>

                    <div className="card-box">
                        <span className="details">Ingredients</span>
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
                    <button>Add Recipe</button>
                </div>
            </form>
        </div>
    );
}