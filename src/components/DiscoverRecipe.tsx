'use client'

/* React */
import Image from 'next/image';

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
    const imgRoute = './img/recipes';

    return (
        <div className='card'>
            <Image src={imgRoute, recipe.img} fill={true} alt='image'></Image>
            <h1>{recipe.title}</h1>
        </div>
    )
};