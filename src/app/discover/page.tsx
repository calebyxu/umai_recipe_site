'use client'

/* react */
import { useState, useEffect, useContext, createContext } from 'react';
import { RecipeContext } from './DiscoverContext';
/* general */
import DiscoverRecipe from '../../components/DiscoverRecipe';
import { ClientContext } from '../ClientWrapperContext';
import { GiConsoleController } from 'react-icons/gi';

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
    /* init useState flag */
    const [recipeChanges, setRecipeChanges] = useState<number[]>([]);

    const recipes = useContext(RecipeContext);
    const useResponseContext = useContext(ClientContext);

    const username = useResponseContext.username;
    const userRecipes = useResponseContext.userRecipes[0];

    let parsedRecipes = []

    if (userRecipes != '') {
        parsedRecipes = JSON.parse(userRecipes);
        for (let id of parsedRecipes) {
            if (!recipeChanges.includes(id.recipeid)) {
                console.log('hello')
                recipeChanges.push(id.recipeid)
            }
        }
    }

    /* fetch data from db using username */
    // useEffect(() => {
    //     async function getUserRecipes() {
    //         const res = await fetch('../api/userRecipes', {
    //             method: 'post',
    //             headers: {
    //                 "Context-Type": "application/json"
    //             },
    //             body: JSON.stringify('caleb')
    //         });
    //     }
    //     getUserRecipes();
    // }, []);

    async function sendUserRecipes() {
        const data = [recipeChanges, userRecipes]

        await fetch('../api/postUserRecipes', {
            method: 'post',
            headers: {
                'Context-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    return (
        <div id='discoverContainer'>
            <form id="sidebarContainer">
                <h1>Filters</h1>
                <div id='submit'>
                    <input type='reset' value='Delete' onClick={() => window.location.reload()}></input>
                    <input type='submit' value='Save' onClick={sendUserRecipes}></input>
                </div>
                
            </form>
            <div id='contentWrapper'>
                <h1 id='header'>Checkout Our Selection!</h1>
                <div id='cardContainer'>
                    {recipes.data.length > 0 ? (
                        recipes.data.map((recipe) => (
                            <DiscoverRecipe key={recipe.id} recipe={recipe} username={username} recipeChanges={recipeChanges} setRecipeChanges={setRecipeChanges} />
                        ))
                    ) : (
                        <p>loading recipes...</p>
                    )}
                </div>
            </div>
        </div>
    )
}