import {useEffect, useState } from "react";
import axios from 'axios';
import "./styles/home.css";
import { Card } from "../components/card";
import { useGetUserID } from '../hooks/useGetUserID'; 

export const Home = () => {

    const [recipes, setRecipes] = useState ([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const userID = useGetUserID();

    useEffect(() => {

        // Fetches all the recipies
        const fetchReipes = async () => {
            try {
                const response = await axios.get("http://localhost:3000/recipes")
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        // Fetches the user saved recipe ID's
        const fetchSavedRecipies = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/recipes/savedRecipes/ids/${userID}`);
                setSavedRecipes(response.data.savedRecipes);
            } catch (error) {
                console.error(error);
            }
        }

        fetchReipes();
        fetchSavedRecipies();
        
    }, []);

    return (
        <div className="container">
            <h2 className="page-heading">Home</h2>
            <div className="card-container">
                {recipes.map((recipe) => (
                    <div key={recipe._id}>
                        <Card
                            recipeID = {recipe._id}
                            img = {recipe.imageUrl}
                            alt = {recipe.name}
                            title = {recipe.name}
                            description =  {recipe.description}
                            cookingTime = {recipe.cookingTime}
                            isSaved = {savedRecipes.includes(recipe._id) ? true : false}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
