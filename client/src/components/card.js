import React from 'react';
import "./card.css";

export const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <img 
                className='card-image'
                src= {props.img}
                alt= {props.alt}
             />
             <h2 className='card-title'>{props.title}</h2>

             {props.instructions.split('<br/>').map((line, index) => (
                <div key={index} className='card-description'>{line}</div>
             ))}
             
        </div>
        <button className='card-button'>View Recipe</button>
    </div>
  )
}
