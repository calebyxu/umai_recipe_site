'use client'

/* Next js */
import Link from 'next/link';
import Image from 'next/image'
/* React */
import { useState, useEffect, useContext } from 'react';
/* General */
import '../css/component.css';
import { GoogleLogin } from '@react-oauth/google';

interface payloadProps {
    setResponsePayload: React.Dispatch<React.SetStateAction<string>>
};

interface credentialResponse {
    credential?: string;
    select_by?: string;
    clientId?: string;
};

export default function NavBar({ setResponsePayload }: payloadProps) {

    const [buttonSize, setButtonSize] = useState<'small' | 'medium' | 'large'>('large');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 800) {
                setButtonSize('small');
            } else if (width < 1100) {
                setButtonSize('medium');
            } else {
                setButtonSize('large');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function decodeJWT(token: string) {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(jsonPayload);
    }
    async function handleCredentialResponse(response: credentialResponse) {
        if (!response.credential) {
            console.log('there is an err');
            return;
        }

        console.log("Encoded JWT ID token: " + response.credential);

        let responsePayload = decodeJWT(response.credential)

        sessionStorage.setItem('name', responsePayload.name)

        setResponsePayload(decodeJWT(response.credential).name);

        // console.log("Decoded JWT ID token fields:");
        // console.log("  Full Name: " + responsePayload.name);
        // console.log("  Given Name: " + responsePayload.given_name);
        // console.log("  Family Name: " + responsePayload.family_name);
        // console.log("  Unique ID: " + responsePayload.sub);
        // console.log("  Profile image URL: " + responsePayload.picture);
        // console.log("  Email: " + responsePayload.email);

        /*fetch api doesn't work with current app since it doesn't reload page*/
        // try {
        //     const response = await fetch("https://umai-site-fc33abfe2d2d.herokuapp.com/home", {
        //         method: "POST",
        //         mode: 'cors',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(responsePayload)
        //     });
        //     console.log(response)
        // } catch (e) {
        //     console.error(e);
        // }
    }

    return (
        <header className="topnavBackground" id="navbar">
            <div className='topnav'>
                <div id='googleLogin'>
                    <a href="/"><div className='topnavImg'><Image src='/img/umaiBlackLogo.svg' fill={true} alt='image'></Image></div></a>
                    <GoogleLogin size={buttonSize}
                        onSuccess={handleCredentialResponse}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        ux_mode="popup"
                        auto_select={false}
                    />
                </div>
                <div className='topnavLinks'>
                    <a href='/wip'>Add Recipe</a>
                    <a href='/discover'>Discover</a>
                    <a href='/userRecipes'>Your Recipes</a>
                </div>
            </div>
        </header>
    );
}
