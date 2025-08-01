'use client'

import { createContext, useContext } from 'react';

type ClientContextType = {
    responsePayload : string
}

export const ClientContext = createContext<ClientContextType | null>(null);

export const useClientContext = () => {
    const userContext = useContext(ClientContext);
    if (!userContext) throw new Error('useMyContext must be used inside ClientWrapper');
    return userContext;
};
