'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
    //useState retains data 
    const [data, setData] = useState();

    //executes getData func and sets it to useState
    // const stuff = getData();

    return (
        <>
            <h1>hello this is the home page</h1>
            <div>
                
            </div>
        </>
    );
}
