'use client'

import { createContext } from 'react';

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

const initialRecipe: RecipeResponse = { data: [] };
export const RecipeContext = createContext<RecipeResponse>(initialRecipe);

