'use client'

import { useState, useEffect } from 'react';

export default function Home() {
    //init json model
    interface DataItem {
        id: number;
        name: string;
        value: number;
    }

    interface JsonResponse {
        data: DataItem[];
    };

    const initialJson: JsonResponse = { data: [] };

    //useState retains data 
    const [json, setJson] = useState<JsonResponse>(initialJson);

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
                {Array.isArray(json.data) ? (
                    json.data.map((item) => 
                        (<h1 key={item.id}>{item.name}</h1>))
                    ) : (
                    <h1>no data</h1>
                )}
            </div>
        </>
    );
}
