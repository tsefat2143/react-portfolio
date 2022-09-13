import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import './experience.css'

const Experience = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

    return (
        <div className='work-experience' id='work-experience'>
            <h1 data-aos='fade-down'>RELEVANT EXPERIENCE</h1>

                {/* <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h2 className='position'>Web Developer</h2>
                    <h2 className='workplace'>Power Smart Electric</h2>
                    <h3 className='date'>July 2022 - September 2022</h3>
                    <ul className='task'>
                        <li>HTML, CSS, JavaScript, jQuery, AJAX, SQL, PHP</li>
                        <li>Hosted with Heroku.</li>
                        <li>Created a website to promote client's electrician business.</li>
                    </ul>
                </div> */}

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h2 className='position'>Web Developer</h2>
                    <h2 className='workplace'>WireSmart Electrical LLC</h2>
                    <h3 className='date'>August 2021 - October 2021</h3>
                    <ul className='task'>
                        <li>HTML, CSS, Bootstrap</li>
                        <li>Hosted with Netlify.</li>
                        <li>Created a website to promote client's electrician business.</li>
                    </ul>
                </div>

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h2 className='position'>Full Stack Developer</h2>
                    <h2 className='workplace'>GoodMD</h2>
                    <h3 className='date'>January 2021 - September 2021</h3>
                    <ul className='task'>
                        <li>React & Google Firebase.</li>
                        <li>Used React to display frontend of healthcare website.</li>
                        <li>Used Firebase to implement user authentication.</li>
                    </ul>
            </div>
        </div>
    )
}

export default Experience
