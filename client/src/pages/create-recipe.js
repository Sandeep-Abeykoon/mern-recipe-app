import "./styles/create-recipe.css";

export const CreateRecipe = () => {
    return (
        <div className="container">
            <h2 className="page-heading">Create Recipe</h2>

            <form action="#">
                <div className="card-details">
                    <div className="card-box">
                        <span className="details">Name</span>
                        <input type="text" placeholder="Enter recipe name" />
                    </div>
                </div>
                <div className="button">
                    <button>Add Recipe</button>
                </div>
            </form>
        </div>
    );
}