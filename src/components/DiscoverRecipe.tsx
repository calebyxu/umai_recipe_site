'use client'

/* Next.js */
import Image from 'next/image';
import Link from 'next/link';
/* React */
import { useContext, useEffect, useRef, useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { ClientContext } from '../app/ClientWrapperContext';

/* General */
import ToggleBookMark from './ToggleBookMark';
import { GET } from '@/app/api/db/route';
// import '../css/discover.css';

/* init interface */
interface RecipeProps {
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

interface DiscoverRecipeProps {
    recipe: RecipeProps,
    username: string[],
    userRecipes: string,
    recipeChanges: number[],
    setRecipeChanges: React.Dispatch<React.SetStateAction<number[]>>
}

export default function DiscoverRecipe({ recipe, username, userRecipes, recipeChanges, setRecipeChanges }: DiscoverRecipeProps) {
    const [src, setSrc] = useState('/img/bookmarkWhite.png');

    const parsedUserRecipes = JSON.parse(userRecipes);

    useEffect(() => {
        const found = parsedUserRecipes.find((id: { recipeid: number }) => id.recipeid === recipe.id);
        if (found) {
            setSrc('/img/bookmarkBlack.png');
        }
    }, [recipe.id, userRecipes]);

    function change() {
        if (src == '/img/bookmarkWhite.png') {
            setSrc('/img/bookmarkBlack.png');
            let change = recipeChanges;
            change.push(recipe.id);
            setRecipeChanges(change);
            console.log(recipeChanges)
        } else {
            setSrc('/img/bookmarkWhite.png');
            let change = recipeChanges;
            change.splice(change.findIndex((i) => i == recipe.id));
            setRecipeChanges(change);
            console.log(recipeChanges)
        }
    }

    const imgRoute = '/img/recipes/' + recipe.img;

    return (
        <div className='card'>
            <div>
                <div className='cardImg'><Image src={imgRoute} objectFit={'cover'} fill={true} alt='image'></Image></div>
                <div className='cardInfo'>
                    <div className='cardTitle'>
                        <h2>{recipe.title}</h2>
                        {username[0] != '' ? (
                            <img src={src} onClick={change}></img>
                        ) : (
                            <div></div>
                        )}

                    </div>
                    <ul>
                        <li>Servings: {recipe.serving}</li>
                        <li>Time: {recipe.time}</li>
                    </ul>
                    <Link href={{ pathname: './discover/recipes', query: { id: recipe.id - 1 } }}>View Recipe</Link>
                </div>
            </div>
        </div>
    )
};