'use client'

/* Next.js */
import Image from 'next/image';
import Link from 'next/link';
/* React */
import { useContext, useEffect } from 'react';
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
    recipe: RecipeProps;
}

export default function DiscoverRecipe({ recipe }: DiscoverRecipeProps) {
    const useResponseContext = useContext(ClientContext);

    /* fetch data from db using username */
    useEffect (() => {
        async function getUserRecipes() {
            const res = await fetch('/api/db', {
                method: 'post',

            });
        }
        getUserRecipes();
    }, []);

    function change() {
        console.log('hello');
    }

    const imgRoute = '/img/recipes/' + recipe.img;

    return (
        <div className='card'>
            <div>
                <div className='cardImg'><Image src={imgRoute} objectFit={'cover'} fill={true} alt='image'></Image></div>
                <div className='cardInfo'>
                    <div className='cardTitle'>
                        <h2>{recipe.title}</h2>
                        {useResponseContext.username[0] != '' ? (
                            <img src='/img/bookmarkWhite.png' onClick={change}></img>
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