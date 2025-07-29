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
            {/* <div>
                {Array.isArray(json.data) ? (
                    json.data.map((item, i) => 
                        (<h1 key={i}>{item}</h1>))
                    ) : (
                    <h1>no data</h1>
                )}
            </div> */}
        </>
    );
}
