import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import "./styles/home.css";
import "../components/card.css";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    // Fetches all the recipies
    const fetchReipes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetches the user saved recipe ID's
    const fetchSavedRecipies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (error) {
        console.error(error);
      }
    };


    fetchReipes();
    fetchSavedRecipies();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3000/recipes", {
        userID,
        recipeID,
      }, {
        headers: {authorization : "fegfhr6765465476"}
      });
      setSavedRecipes(response.data.savedRecipes)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="page-heading">Home</h2>
      <div className="card-container">
        {recipes.map((recipe) => (
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
                  <button
                    className="card-button-save"
                    onClick={() => saveRecipe(recipe._id)}
                  >
                    Save
                  </button>
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
