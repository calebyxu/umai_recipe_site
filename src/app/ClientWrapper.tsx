'use client'

/* React */
import { createContext } from 'react';
import { useState, useContext } from 'react';
/* Redux */
import { store } from './store';
import { Provider } from 'react-redux';
/* General imports */
import NavBar from '../components/NavBar';
import { ClientContext } from './ClientWrapperContext'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    /* google login */
    const [responsePayload, setResponsePayload] = useState('');

    console.log(responsePayload);

    return (
        <Provider store={store}>
            <ClientContext.Provider value={{ responsePayload }}>
                <NavBar setResponsePayload={setResponsePayload} />
                {children}
            </ClientContext.Provider>
        </Provider>
    )
};