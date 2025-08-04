'use client'

/* React */
import Image from 'next/image';
import Link from 'next/link';

/* General */
import '../css/discover.css';

/* init interfaces */
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
};

interface DiscoverRecipeProps {
    recipe: RecipeInterface;
};

export default function DiscoverRecipe({ recipe }: DiscoverRecipeProps) {
    const imgRoute = '/img/recipes/' + recipe.img;

    return (
        <div className='card'>
            <div className='cardImg'><Image src={imgRoute} objectFit={'cover'} fill={true} alt='image'></Image></div>
            <div className='cardInfo'>
                <h2>{recipe.title}</h2>
                <ul>
                    <li>Servings: {recipe.serving}</li>
                    <li>Time: {recipe.time}</li>
                </ul>
                <Link href={{pathname: './recipes', query: {
                    id: recipe.id,
                    name: recipe.title,
                    img: recipe.img,
                    video: recipe.video,
                    time: recipe.time,
                    serving: recipe.serving,
                    ingredients: recipe.ingredients,
                    instructions: recipe.instructions
                    }}}>View Recipe</Link>
            </div>
        </div>
    )
};