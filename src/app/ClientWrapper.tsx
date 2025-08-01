'use client'

/* React */
import { createContext } from 'react';
import { useState, useContext } from 'react';
/* General imports */
import NavBar from '../components/NavBar';
import { ClientContext } from './ClientWrapperContext'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [responsePayload, setResponsePayload] = useState('');

    return (
        <ClientContext.Provider value={{ responsePayload }}>
            <NavBar setResponsePayload={setResponsePayload} />
            {children}
        </ClientContext.Provider>
    )
};