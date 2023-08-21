import React from 'react';
import axios from 'axios';
import { useGetUserID } from '../hooks/useGetUserID'; 
import "./card.css";

export const Card = (props) => {

  const userID = useGetUserID();

  const saveRecipe = async (recipeID) => {
    try {
        const response =await axios.put("http://localhost:3000/recipes", {
        userID,
        recipeID
      });

      alert(response.data.message);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='card'>
        <div className='card-body'>
            <img 
                className='card-image'
                src= {props.img}
                alt= {props.alt}
             />
             <h2 className='card-title'>{props.title}</h2>
             <button className='card-button-save' onClick={() => saveRecipe(props.recipeID)}>Save</button>
             <div className='card-description'>{props.description}</div>
             <div className='cooking-time'>Cooking time : {props.cookingTime} Minutes</div>
        </div>
        <button className='card-button' >View Recipe</button>
    </div>
  )
}
