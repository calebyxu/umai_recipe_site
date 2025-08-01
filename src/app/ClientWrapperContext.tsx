'use client'

import { createContext } from 'react';

type ClientContextType = {
    responsePayload : string
}

export const ClientContext = createContext<ClientContextType | null>(null);

// export default function ClientWrapperContext() {
//     return (
//         <>
            
//         </>
//     )
// }