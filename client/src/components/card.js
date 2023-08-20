import React from 'react'

export const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <img 
                src= {props.img}
                alt= {props.alt}
             />
             <h2 className='card-title'>{props.title}</h2>
             <p className='class-description'>{props.description}</p>
        </div>
        <button className='card-button'>View Recipe</button>
    </div>
  )
}
