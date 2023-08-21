import {useEffect, useState } from "react";
import axios from 'axios';
import "./styles/home.css";
import { Card } from "../components/card";

export const Home = () => {

    const [recipes, setRecipes] = useState ([]);

    useEffect(() => {

        const fetchReipes = async () => {
            try {
                const response = await axios.get("http://localhost:3000/recipes")
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchReipes();
        console.log(recipes);

    }, []);

    return (
        <div className="container">
            <h2 className="page-heading">Home</h2>
            <div className="card-container">
                {recipes.map((recipe) => (
                    <div key={recipe._id}>
                        <Card
                            img = {recipe.imageUrl}
                            title = {recipe.name}
                            description =  {recipe.description}
                            cookingTime = {recipe.cookingTime}
                        />
                    </div>
                ))}
                
            </div>
        </div>
    );
}
