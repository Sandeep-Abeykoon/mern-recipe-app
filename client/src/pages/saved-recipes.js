import { useEffect, useState } from "react";
import "./styles/saved-recipes.css";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { useCookies } from "react-cookie";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/recipes/savedRecipes/${userID}`, {
            headers: {authorization: cookies.access_token}
          }
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSavedRecipes();
  }, []);

  const unsaveRecipe = async (recipeID) => {
    try {
      const response = await axios.patch(`http://localhost:3000/recipes/${userID}/${recipeID}/remove`,
      {},
      {headers: {authorization: cookies.access_token}}
      );
      setSavedRecipes(response.data.savedRecipes)
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="page-heading">Saved Recipes</h2>

      {savedRecipes.length === 0? (
        <div className="no-saved-recipies">No Saved recipies available...</div>
      ) : null}

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
                <h2 className="card-title">{recipe.name}</h2>
                <button className="card-button-save" onClick={ () => unsaveRecipe(recipe._id) }>Unsave</button>
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
