//import { Link } from 'react-router-dom'
//import Person from './coding.gif'
import React, { useEffect } from 'react'
import Socials from '../Socials/socials'
import Typewriter from "typewriter-effect";
import beach from '../../beach.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration:2000,
            once: true
        });
    }, []);

    return (
        <div className='home' id='/'>
            <video autoPlay loop muted>
                <source src={beach}></source>
            </video>
            <div data-aos='slide-right' className='title'>
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
                <Socials />
            </div>
        </div>
    )
}

export default Home
