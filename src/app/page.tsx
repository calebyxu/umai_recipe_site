'use client'
/* Next js */

/* React */
import { useState, useEffect, useContext } from 'react';
import { ClientContext } from './ClientWrapperContext';
/* General */
import Image from 'next/image';
import Link from 'next/link';
import './home.css';

//context allows for data distribution amongst pages
// export const UserInfo = createContext(null);

//init json model
interface DataItem {
    id: number;
    name: string;
    value: number;
};

interface JsonResponse {
    data: DataItem[];
};

//init payload model
interface payloadProps {
    responsePayload: string
};

export default function Home() {

    const initialJson: JsonResponse = { data: [] };

    //useState retains data 
    const [json, setJson] = useState<JsonResponse>(initialJson);
    const useResponseContext = useContext(ClientContext);

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
            {/* <h1>hello this is the home page</h1>
            <div>
                {Array.isArray(json.data) ? (
                    json.data.map((item) => 
                        (<h1 key={item.id}>{item.name}</h1>))
                    ) : (
                    <h1>no data</h1>
                )}
            </div> */}
            <div id='contentWrapper'>
                <div id="hero">
                    <div id="heroContainer">
                        <Image src='/img/picnicUserLanding.jpg' fill={true} objectFit={"cover"} alt='image'></Image>
                        <div id="heroTextWrapper">
                            <h1 id="heroText">Welcome {useResponseContext.responsePayload}</h1>
                        </div>
                    </div>
                </div>
                <div className="separator">
                    <h1>Find Something New</h1>
                    <Link href="/discover">Discover Now</Link>
                </div>
                <div className="gridContainer">
                    <div className="gridText">
                        <h1>Your Recipes</h1>
                        <p>
                            Sometimes the best food is something that you have already made.
                            Rejoin your world of culinary inspiration with your treasure trove of tantalizing recipes.
                            Dive into a mouthwatering journey that promises to satisfy every craving and ignite your passion
                            for cooking.
                            Click below to see what you have cooking!
                        </p>
                        <Link className="link" href="/home">Cooking Time!</Link>
                    </div>
                    <div className="gridDisplay">
                        <div className='gridImg'><Image src='/img/recipes/katsudon.jpg' fill={true} objectFit={'cover'} alt='image'></Image></div>
                    </div>
                </div>
            </div>
            <footer></footer>
        </>
    );
}
