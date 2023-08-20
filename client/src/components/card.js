import React from 'react'

export const Card = () => {
  return (
    <div className='card'>
        <div className='card-body'>
            <img 
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" 
                alt="Recipe cooked"
             />
             <h2 className='card-title'>BBQ Chicken Pizza</h2>
             <p className='class-description'></p>
        </div>
        <button className='card-button'>View Recipe</button>
    </div>
  )
}
