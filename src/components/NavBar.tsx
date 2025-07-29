import Link from 'next/link';
import '../components/component.css';
import umaiBlack from '../../public/img/UMAI-ICON-FINAL-02.svg';

export default function NavBar() {
    return (
        <header className="topnavBackground" id="navbar">
            <div className='topnav'>
                <div id='googleLogin'>
                    <Link href="/"><img src={umaiBlack}></img></Link>
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
