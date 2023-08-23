import React, { useState, useEffect } from "react";
import "./styles/viewRecipe.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useParams } from "react-router-dom";
import axios from "axios";

export const ViewRecipe = () => {
 
  const { recipeID } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {

    // Fetch recipe details
    const fetchReipe = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/recipes/${recipeID}`);
      setRecipe(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchReipe();
}, [recipeID] );

  return (
    <div className="container">
      <h2 className="page-heading">View Recipe</h2>
      <div className="viewRecipe-card">
        <div className="card">
          <div className="card-body">
            <img
              className="card-image"
              src= {recipe.imageUrl}
              alt= {recipe.name}
            />
            <h2 className="card-title">{recipe.name}</h2>

            <div className="card-description">{recipe.description}</div>
            <div className="cooking-time">Cooking time : {recipe.cookingTime} Minutes</div>

            <div className="instructions">
              <div className="instructions-heading">Instructions</div>
              <div className="instructions-content">
                {recipe.instructions?.split("\n").map((line, index) => {
                  return(
                    <div className="line" key={index}>
                      <span className="line-number">{index + 1}. </span>
                      <span className="line-content">{line}</span>
                    </div>
                    );
                })}
              </div>
            </div>
                <Tippy content="Click me to navigate">
                  <div className="user-creater">By: Sandeep Abeykoon</div>
                </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};
