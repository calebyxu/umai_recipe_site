'use client'

import { useContext, useState, useEffect, createContext, Suspense } from 'react';
import { RecipeContext } from './DiscoverContext';

/* General */
import '../../css/discover.css';

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

export default function DiscoverLayout({ children }: { children: React.ReactNode }) {
    //stores recipe data
    const initialRecipe: RecipeResponse = { data: [] };
    const [recipes, setRecipes] = useState<RecipeResponse>(initialRecipe);

    //fetch to db conn
    useEffect(() => {
        async function fetchDb() {
            const res = await fetch('../api/db');
            setRecipes(await res.json());
        }
        fetchDb();
    }, []);

    return (
        <Suspense fallback={<p>loading...</p>}>
            <RecipeContext value={recipes}>
                {children}
            </RecipeContext>
        </Suspense>
    )
}