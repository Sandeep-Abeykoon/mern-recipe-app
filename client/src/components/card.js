import React from 'react';
import "./card.css";

export const Card = (props) => {
  console.log(props.description)
  return (
    <div className='card'>
        <div className='card-body'>
            <img 
                className='card-image'
                src= {props.img}
                alt= {props.alt}
             />
             <h2 className='card-title'>{props.title}</h2>
             <div className='card-description'>{props.description}</div>
             <div className='cooking-time'>Cooking time : {props.cookingTime} Minutes</div>
        </div>
        <button className='card-button'>View Recipe</button>
    </div>
  )
}
