'use client'

/* React */
import { createContext } from 'react';
import { useState, useContext } from 'react';
/* General imports */
import NavBar from '../components/NavBar';
import { ClientContext } from './ClientWrapperContext'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    /* google login */
    const [responsePayload, setResponsePayload] = useState('');

    console.log(responsePayload);

    return (
        <ClientContext.Provider value={{ responsePayload }}>
            <NavBar setResponsePayload={setResponsePayload} />
            {children}
        </ClientContext.Provider>
    )
};