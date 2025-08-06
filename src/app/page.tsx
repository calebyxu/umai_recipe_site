'use client'
/* Next js */

/* React */
import { useState, useEffect, useContext } from 'react';
import { ClientContext } from './ClientWrapperContext';
/* General */
import Image from 'next/image';
import Link from 'next/link';
import '../css/home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//init db json model
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
        async function fetchDb() {
            const res = await fetch('/api/db');
            setJson(await res.json());
        }
        fetchDb();
    }, []);

    /* carousel media queries */
    const responsive = {
        LargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1500 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1500, min: 1100 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1100, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
                            <h1 id="heroText">Welcome</h1>
                            <h1>{useResponseContext.responsePayload}</h1>
                        </div>
                    </div>
                </div>
                <div className="separator">
                    <h1>Find Something New</h1>
                    <Link href="/discover">Discover Now</Link>
                </div>
                <Carousel responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={5000} infinite={true}>
                    <div className="carouselImg"><Image src="/img/recipes/charsui.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/gyudon.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/japanese_chicken_curry.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/oyakodon.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/fried_rice.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/tea_eggs.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/katsudon.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                    <div className="carouselImg"><Image src="/img/recipes/mapo_tofu.jpg" fill={true} alt='image' objectFit='cover'></Image></div>
                </Carousel>
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
                        <Link href="/discover">Cooking Time!</Link>
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
