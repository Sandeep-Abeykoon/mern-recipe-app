import "./styles/create-recipe.css";

export const CreateRecipe = () => {
    return (
        <div className="container">
            <h2 className="page-heading">Create Recipe</h2>

            <form action="#">
                <div className="card-details">
                    <div className="card-box">
                        <span className="details">Recipe Name</span>
                        <input id="name" name="name" type="text" placeholder="Enter recipe name" />
                    </div>

                    <div className="card-box">
                        <span className="details">Description</span>
                        <textarea name="description" id="description" cols="30" rows="10" placeholder="Enter the steps"></textarea>
                    </div>

                    <div className="card-box">
                        <span className="details">Ingredients</span>
                    </div>

                    <div className="card-box">
                        <span className="details">Image URL</span>
                        <input id="image" name="image" type="text" placeholder="Copy paste the image url" />
                    </div>

                    <div className="card-box">
                        <span className="details">Cooking Time (minutes)</span>
                        <input id="cooking-time" name="cooking-time" type="text" placeholder="Enter cooking time in minutes" />
                    </div>
                </div>
                <div className="button">
                    <button>Add Recipe</button>
                </div>
            </form>
        </div>
    );
}