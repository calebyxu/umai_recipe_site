'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import '../components/component.css';
import { GoogleLogin } from '@react-oauth/google';

export default function NavBar() {
    interface credentialResponse {
        credential?: string;
        select_by?: string;
        clientId?: string;
    }

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
            return;
        }

        console.log("Encoded JWT ID token: " + response.credential);

        const responsePayload = decodeJWT(response.credential);

        console.log("Decoded JWT ID token fields:");
        console.log("  Full Name: " + responsePayload.name);
        console.log("  Given Name: " + responsePayload.given_name);
        console.log("  Family Name: " + responsePayload.family_name);
        console.log("  Unique ID: " + responsePayload.sub);
        console.log("  Profile image URL: " + responsePayload.picture);
        console.log("  Email: " + responsePayload.email);

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

        // const form = document.createElement('form');
        // form.method = 'POST';
        // form.action = 'https://umai-site-fc33abfe2d2d.herokuapp.com/home';

        // const input = document.createElement('input');
        // input.type = 'hidden';
        // input.name = 'name';
        // input.value = responsePayload['name'];
        // form.appendChild(input);

        // document.body.appendChild(form);
        // form.submit();
    }

    return (
        <header className="topnavBackground" id="navbar">
            <div className='topnav'>
                <div id='googleLogin'>
                    <Link href="/"><div className='topnavImg'><Image src='./img/umaiBlackLogo.svg' fill={true} alt='image'></Image></div></Link>
                    {/* <div id="g_id_onload"
                        data-client_id="1063240373526-setg3qv32eos774o69n7erif729utnos.apps.googleusercontent.com"
                        data-context="signin"
                        data-ux_mode="popup"
                        data-callback="handleCredentialResponse"
                        data-auto_prompt="false">
                    </div>
                    <div className="g_id_signin"
                        data-type="standard"
                        data-shape="rectangular"
                        data-theme="filled_black"
                        data-text="signin_with"
                        data-size="large"
                        data-logo_alignment="left">
                    </div> */}
                    <GoogleLogin size={buttonSize}
                        onSuccess={handleCredentialResponse}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
                <div className='topnavLinks'>
                    <Link href='/wip'>Add Recipe</Link>
                    <Link href='/discover'>Discover</Link>
                    <Link href='/wip'>Your Recipes</Link>
                </div>
            </div>
        </header>
    );
}
