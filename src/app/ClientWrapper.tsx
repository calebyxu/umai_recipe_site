'use client'

/* React */
import { createContext } from 'react';
import { useState, useContext } from 'react';
/* Redux */
// import { store } from './store';
// import { Provider } from 'react-redux';
/* Session Storage State */
import useSessionStorageState from 'use-session-storage-state';
/* General imports */
import NavBar from '../components/NavBar';
import { ClientContext } from './ClientWrapperContext'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    /* google login */
    // const [responsePayload, setResponsePayload] = useState('');
    const [username, setUsername] = useSessionStorageState('name', {
        defaultValue: ['']
    })

    const [ userRecipes, setUserRecipes ] = useSessionStorageState('userRecipes', {
        defaultValue: ['']
    })

    return (
        <ClientContext.Provider value={{ username, userRecipes }}>
            <NavBar setUsername={setUsername} setUserRecipes={setUserRecipes}/>
            {children}
        </ClientContext.Provider>
    )
};