import Link from 'next/link';
import Image from 'next/image'
import '../components/component.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function NavBar() {


    return (
        <header className="topnavBackground" id="navbar">
            <div className='topnav'>
                <div id='googleLogin'>
                    <Link href="/"><div className='topnavImg'><Image src='./img/umaiBlackLogo.svg' fill={true} alt='image'></Image></div></Link>
                    <div id="g_id_onload"
                        data-client_id="1063240373526-setg3qv32eos774o69n7erif729utnos.apps.googleusercontent.com"
                        data-context="signin"
                        data-ux_mode="popup"
                        data-login_uri="https://umai-recipe-site-git-porting-home-calebyxus-projects.vercel.app/"
                        data-auto_prompt="false">
                    </div>
                    <div className="g_id_signin"
                        data-type="standard"
                        data-shape="rectangular"
                        data-theme="filled_black"
                        data-text="signin_with"
                        data-size="large"
                        data-logo_alignment="left">
                    </div>
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
