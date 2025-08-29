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
    recipeChanges: number[],
    setRecipeChanges: React.Dispatch<React.SetStateAction<number[]>>
}

export default function DiscoverRecipe({ recipe, username, recipeChanges, setRecipeChanges }: DiscoverRecipeProps) {
    const [src, setSrc] = useState('/img/bookmarkWhite.png');

    useEffect(() => {
        const found = recipeChanges.find((id: number) => id === recipe.id);
        if (found) {
            setSrc('/img/bookmarkBlack.png');
        }
    })

    function saving() {
        let change = []

        if (src == '/img/bookmarkWhite.png') {
            setSrc('/img/bookmarkBlack.png');
            change = recipeChanges;
            change.push(recipe.id);
            setRecipeChanges(change);
        } else {
            setSrc('/img/bookmarkWhite.png');
            change = recipeChanges;
            change.splice(change.findIndex((i) => i == recipe.id), 1);
            setRecipeChanges(change);
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
                            <img src={src} onClick={saving}></img>
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