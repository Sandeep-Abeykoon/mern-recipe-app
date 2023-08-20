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

    }, []);

    return (
        <div className="container">
            <h2 className="page-heading">Home</h2>
            <div className="card-container">
                <Card
                    img = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                    alt = "Recipe cooked"
                    title = "BBQ Chicken Pizza"
                    description =  "Make the dove with all the ingredients. <br/>bake The pizza dove in the oven" 
                />

                <Card
                    img = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                    alt = "Recipe cooked"
                    title = "BBQ Chicken Pizza"
                    description =  "Make the dove with all the ingredients. <br/>bake The pizza dove in the oven" 
                />

                <Card
                    img = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                    alt = "Recipe cooked"
                    title = "BBQ Chicken Pizza"
                    description =  "Make the dove with all the ingredients. <br/>bake The pizza dove in the oven" 
                />

                <Card
                    img = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                    alt = "Recipe cooked"
                    title = "BBQ Chicken Pizza"
                    description =  "Make the dove with all the ingredients. <br/>bake The pizza dove in the oven" 
                />
            </div>
        </div>
    );
}
