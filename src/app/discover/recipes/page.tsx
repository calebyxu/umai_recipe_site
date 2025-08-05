'use client'

/* Next.js */
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
/* React */
import { useContext } from 'react';
/* General */
import { RecipeContext } from '../DiscoverContext';
import '../../../css/recipe.css';

export default function recipe() {
    /* use context */
    const recipes = useContext(RecipeContext);

    /* Retrieve id value from URL */
    const searchParams = useSearchParams();
    const id = parseInt(searchParams.get('id')!);

    if (recipes.data[id] == null) {
        return (
            <>
                <p>loading...</p>
            </>
        )
    } else {
        const imgRoute = '/img/recipes/' + recipes.data[id].img;
        const recipe = recipes.data[id];

        const instructions = recipe.instructions.split('. ');
        const ingredients = recipe.ingredients.split('. ');

        return (
            <div id='container'>
                <div id='containerLeft'>
                    <div id='containerRightImg'><Image src={imgRoute} alt='image' fill={true} objectFit='cover'></Image></div>
                    <h2>Ingredients</h2>
                    <ul id='ingredientsWrapper'>
                        {ingredients.map((row, index) => <li key={index}>{row}</li>)}
                    </ul>
                </div>
                <div id='containerRight'>
                    <h1>{recipe.title}</h1>
                    <iframe src={recipe.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <h2>Instructions</h2>
                    <ul id='ingredientsWrapper'>
                        {instructions.map(row => <li>{row}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    // return (
    //     <>
    //         {recipes.data[id] == null ? (
    //             <p>loading...</p>
    //         ) : (
    //             <div id='container'>
    //                 <div id='containerLeft'>
    //                     <h1>hello</h1>
    //                 </div> 
    //                 <div id='containerRight'>
    //                     <Image src={imgRoute}></Image>
    //                 </div>
    //             </div>
    //         )}
    //     </>
    // )
}