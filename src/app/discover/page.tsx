'use client'

/* react */
import { useState, useEffect, useContext, createContext } from 'react';
import { RecipeContext } from './DiscoverContext';
/* general */
import '../../css/discover.css';
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
    //init context for recipes
    const recipeContext = useContext(RecipeContext);
    const initialRecipe: RecipeResponse = { data: [] };

    //stores recipe data
    const [recipes, setRecipes] = useState<RecipeResponse>(initialRecipe);

    //fetch to db conn
    useEffect(() => {
        async function fetchDb() {
            const res = await fetch('../api/db');
            setRecipes(await res.json());
        }
        fetchDb();
        console.log('hello')
    }, []);

    console.log(recipes)

    return (
        <div id='discoverContainer'>
            <form id="sidebarContainer">

            </form>
            <div id='contentWrapper'>
                <h1 id='header'>Checkout Our Selection!</h1>
                <div id='cardContainer'>
                    {recipes.data.length > 0 ? (
                        <RecipeContext.Provider value={recipes}>
                            {recipes.data && recipes.data.map((recipe) => (
                                <DiscoverRecipe key={recipe.id} recipe={recipe}/>
                            ))}
                        </RecipeContext.Provider>
                    ) : (
                        <p>loading recipes...</p>
                    )}
                </div>
            </div>
        </div>
    )
}