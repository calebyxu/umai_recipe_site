'use client'

import { createContext, useContext } from 'react';

interface ClientContextType {
    responsePayload : string,
    username: string[]
}

export const ClientContext = createContext<ClientContextType>({ responsePayload: '',  username: [] });

export const useClientContext = () => {
    const userContext = useContext(ClientContext);
    if (!userContext) throw new Error('useMyContext must be used inside ClientWrapper');
    return userContext;
};
