'use client'

/* React */
import { useContext } from 'react';
import { ClientContext } from '../ClientWrapperContext';

/* General */
import '../../css/userRecipes.css';

export default function UserRecipes() {
    const useResponseContext = useContext(ClientContext);

    console.log(useResponseContext.responsePayload);

    return (
        <div className='container'>
            <h1>hello this is use recipes</h1>
            <h1>{useResponseContext.responsePayload}</h1>
        </div>
    )
}