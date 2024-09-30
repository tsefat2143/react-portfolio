import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './about.css'
import Me from './me.jpg'

const About = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

    return (
        <div className='about' id='about'>
            <h1 data-aos='fade-down'>ABOUT ME</h1>
            <div className='about-div'>
                <img src={Me} alt='Me' data-aos={window.innerWidth>=1300 ? 'fade-right': 'fade-down'} />
                <div className='bio' data-aos={window.innerWidth>=1300 ? 'fade-left': 'fade-down'}>
                    <p>
                        Hi Everyone! My name is Tajdidul. 
                        By using various programming languages, I like to create 
                        projects and learn new technologies to better my skills. 
                        I graduated from the City University of New York at Queens College 
                        and plan to enjoy the journey of the web. During my free time, I love to go
                        to the gym, play sports, go snowboarding, or watch a comedy show.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
