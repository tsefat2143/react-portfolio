//import { Link } from 'react-router-dom'
//import Person from './coding.gif'
import Socials from '../Socials/socials'
import Typewriter from "typewriter-effect";
import beach from '../../beach.mp4'
import './home.css'

const home = () => {
    return (
        <div className='home' id='/'>
            <video autoPlay loop muted>
                <source src={beach}></source>
            </video>
            <div className='title'>
                <h1>
                    <p>Hi,</p>
                    <p>I am Tajdidul Sefat,</p>
                    <p>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Content Editor', 'Web Producer'],
                                pauseFor: 1000,
                                autoStart: true,
                                loop: true,
                            }}/>
                    </p>
                </h1>
                {/* <a href='about'>
                    <button>About Me</button>
                </a> */}
                <Socials />
            </div>
{/*             <div className='gif-div'>
                <img src={Person} alt="computer gif" className='comp-gif'/>
            </div> */}
        </div>
    )
}

export default home
