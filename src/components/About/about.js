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
            <h2 data-aos='fade-down'>ABOUT ME</h2>
            <div className='about-div'>
                <img src={Me} alt='tajdidul-profile' data-aos={window.innerWidth>=1300 ? 'fade-right': 'fade-down'} />
                <div className='bio' data-aos={window.innerWidth>=1300 ? 'fade-left': 'fade-down'}>
                    <p>
                        Hi, I’m Tajdidul, a passionate web developer specializing in both front-end and back-end development. 
                        With expertise in technologies like HTML/CSS, JavaScript, PHP, and WordPress I love creating innovative, 
                        user-friendly projects. After graduating from the City University of New York at Queens College, 
                        I’ve been honing my skills in web development and email marketing. I'm committed to building responsive, 
                        scalable websites and optimizing user experiences.
                    </p>
                    <p>
                        Whether I'm working on a dynamic web app or crafting email marketing campaigns, 
                        I always strive to bring a blend of creativity and technical expertise to each project. 
                    </p>
                    <p>
                        When I’m not coding, you’ll find me at the gym, playing sports, snowboarding, or enjoying a good comedy show. 
                        I believe a balanced life fuels my creativity and helps me stay motivated in my web development career.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
