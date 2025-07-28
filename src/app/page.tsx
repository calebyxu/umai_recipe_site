'use client'

import { useState, useEffect } from 'react';

export default function Home() {
    //useState retains data 
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchHello() {
            const res = await fetch('/api/db');
            const data = await res.json();
            setData(data.message);
        }
        fetchHello();
    }, []);

    //executes getData func and sets it to useState
    // const stuff = getData();

    return (
        <>
            <h1>hello this is the home page</h1>
            <div>
                {data}
            </div>
        </>
    );
}
