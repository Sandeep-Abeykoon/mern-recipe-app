import React from 'react'

export const ViewRecipe = () => {
  return (
    <div className='container'>
        <h2 className='page-heading'>View Recipe</h2>
    
        <div className="card">
              <div className="card-body">
                <img
                  className="card-image"
                  src= "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
                  alt= "Food"
                />
                <h2 className="card-title">APPLE</h2>

                <div className="card-description">Description</div>
                <div className="cooking-time">
                  Cooking time : 5 Minutes
                </div>
              </div>
            </div>
        </div>
  )
}
