'use client'

/* react */
import { useState, useEffect, useContext, createContext } from 'react';
import { RecipeContext } from './DiscoverContext';
/* general */
import DiscoverRecipe from '../../components/DiscoverRecipe';

interface RecipeInterface {
    id: number;
    title: string;
    img: string;
    video: string;
    time: number;
    serving: number;
    description: string;
    ingredients: string;
    instructions: string;
    tags: string;
}

interface RecipeResponse {
    data: RecipeInterface[];
};

export default function Page() {
    const recipes = useContext(RecipeContext);

    return (
        <div id='discoverContainer'>
            <form id="sidebarContainer">
                <div id='sidebarContainer'>
                    <h1>Filters</h1>
                </div>
            </form>
            <div id='contentWrapper'>
                <h1 id='header'>Checkout Our Selection!</h1>
                <div id='cardContainer'>
                    {recipes.data.length > 0 ? (
                        recipes.data.map((recipe) => (
                            <DiscoverRecipe key={recipe.id} recipe={recipe} />
                        ))
                    ) : (
                        <p>loading recipes...</p>
                    )}
                </div>
            </div>
        </div>
    )
}