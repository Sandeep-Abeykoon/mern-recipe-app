import { useEffect, useState } from "react";
import "./styles/saved-recipes.css";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavedRecipes();
  }, []);

  return (
    <div className="container">
      <h2 className="page-heading">Saved Recipes</h2>
      <div className="card-container">
        {savedRecipes.map((recipe) => (
          <div key={recipe._id}>
            <div className="card">
              <div className="card-body">
                <img
                  className="card-image"
                  src={recipe.imageUrl}
                  alt={recipe.alt}
                />
                <h2 className="card-title">{recipe.title}</h2>

                {savedRecipes.includes(recipe._id) ? (
                  <h6 className="saved-heading">
                    Saved <i className="fa-solid fa-check fa-fade"></i>
                  </h6>
                ) : (
                  <button className="card-button-save">Save</button>
                )}
                <div className="card-description">{recipe.description}</div>
                <div className="cooking-time">
                  Cooking time : {recipe.cookingTime} Minutes
                </div>
              </div>
              <button className="card-button">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
