'use client'

import { createContext, useContext } from 'react';

interface ClientContextType {
    username: string[],
    userRecipes: string[]
}

export const ClientContext = createContext<ClientContextType>({ username: [], userRecipes: [] });

export const useClientContext = () => {
    const userContext = useContext(ClientContext);
    if (!userContext) throw new Error('useMyContext must be used inside ClientWrapper');
    return userContext;
};
