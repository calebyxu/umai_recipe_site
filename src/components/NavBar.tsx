import Link from 'next/link';
import Image from 'next/image'
import '../components/component.css';

export default function NavBar() {
    return (
        <header className="topnavBackground" id="navbar">
            <div className='topnav'>
                <div id='googleLogin'>
                    <Link href="/"><Image src='./img/umaiBlackLogo.svg' className='topnavImg' alt='image'></Image></Link>
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
