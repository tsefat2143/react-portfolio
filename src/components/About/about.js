import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css'

const About = () => {
    useEffect(() => {
        AOS.init({
            duration:2000,
            once: true
        });
    }, []);

    return (
        <div data-aos='fade-up' className='about' id='about'>
            <h1>ABOUT ME</h1>
            <p>
                Hi Everyone! My name is Tajdidul Sefat and I love to code. 
                By using various programming languages I like to create 
                projects and learn new technologies to better my skills. 
                I have graduated from the City University 
                of New York at Queens College and plan to enjoy the ride 
                of web development. During my weekends, I love to go
                to the gym, play sports, or enjoy watching a comedy show.
            </p>
            <p>
                I am currently a Sr. Admin Analyst at the New York Human Resources Administration. 
                I am open to other roles within the United States, so please free to 
                <a href='/#contact'> contact </a> me.
            </p>
        </div>
    )
}

export default About;
