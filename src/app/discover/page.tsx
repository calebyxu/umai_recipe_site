'use client'

/* react */
import { useState, useEffect, useContext } from 'react';
/* general */
import './discover.css';
import DiscoverRecipe from '../../components/DiscoverRecipe'; 

interface RecipeInterface {
    id: number,
    title: string,
    img: string,
    video: string,
    time: number,
    serving: number,
    description: string,
    ingredients: string,
    instructions: string,
    tags: string
};

interface RecipeResponse {
    data: RecipeInterface[];
};

export default function Page() {
    //stores recipe data
    const initialRecipe: RecipeResponse = { data: [] };
    const [recipeData, setRecipeData] = useState<RecipeResponse>(initialRecipe);

    //fetch to db conn
    useEffect(() => {
        async function fetchHello() {
            const res = await fetch('/api/db');
            setRecipeData(await res.json());
        }
        fetchHello();
    }, []);

    return (
        <div id='discoverContainer'>
            <form id="sidebar_container">
                    
            </form>
            <div id='contentWrapper'>
                <div id='header'><h1>Checkout Our Selection!</h1></div>
                <div id='cardContainer'>
                    <DiscoverRecipe />
                    <DiscoverRecipe />
                    <DiscoverRecipe />
                </div>
            </div>
        </div>
    )
}