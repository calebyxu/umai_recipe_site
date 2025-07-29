'use client'

import { useState, useEffect } from 'react';

export default function Home() {
    //useState retains data 
    const [json, setJson] = useState({ data: [] });

    //fetch to db conn
    useEffect(() => {
        async function fetchHello() {
            const res = await fetch('/api/db');
            setJson(await res.json());
        }
        fetchHello();
    }, []);

    return (
        <>
            <h1>hello this is the home page</h1>
            <div>
                {json.data && json.data.map((item, index) =>
                    <h1 key={index}>{item}</h1>
                )}
            </div>
        </>
    );
}
