//import Graduation from './graduation.gif'
import Wiresmart from './wiresmart.gif'
import Powersmart from './powersmart.gif'
import Fitness from './wordpress.gif'
import Sneaker from './shopify.gif'
import Lyfe from './lyfe.gif'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import './project.css'
import ReactGA from "react-ga4";
import temail from './temail.gif';
import pemail from './pemail.gif'
import nemail from './nemail.gif'
import Restaurant from './restaurant.gif'


const projectAnalytics = (project, buttonType, clickCount, setClickCount) => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    ReactGA.event({
        action:`${project}_${buttonType}_click`,
        category:'button_clicks',
        label:`${buttonType} Button for ${project}`,
        value:newClickCount,
    });
    console.log(`${project} - ${buttonType} clicked`, newClickCount);
}

const Project = () => {
    const [clickCounts, setClickCounts] = useState({
        Powersmart_Live: 0,
        Wiresmart_Live: 0,
        Restaurant_Live: 0,
        Lyfe_Live: 0,
        Lyfe_Github: 0,
        Store_Live: 0,
        NEmail_Live: 0,
        NEmail_Github: 0,
        TEmail_Live: 0,
        TEmail_Github: 0,
        PEmail_Live: 0,
        PEmail_Github: 0,
        Fitness_Live: 0,
    });

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

    // Function to update the click count for a specific project and button type
    const handleButtonClick = (project, buttonType) => {
        const newClickCounts = { ...clickCounts };
        newClickCounts[`${project}_${buttonType}`] += 1; // Increment the click count for the specific button type
        setClickCounts(newClickCounts);

        // Call the analytics function
        projectAnalytics(project, buttonType, clickCounts[`${project}_${buttonType}`], (newCount) => {
            newClickCounts[`${project}_${buttonType}`] = newCount;
            setClickCounts(newClickCounts);
        });
    };

    return (
        <div className='project-div' id='project'>
            <h2 data-aos='fade-down'>PROJECTS I'VE BUILT</h2>
            <div className='project-container'>
                <div data-aos='fade-down' className='project'>
                        <img src={Powersmart} alt='Powersmart' />
                        <p>Power Smart Electric</p>
                        <div className='project-text'>
                            <p>Created a website for an electrician client</p>
                            <p>HTML, CSS, JavaScript, jQuery, AJAX, SQL, PHP</p>
                            <div>
                                <a href='https://powersmartelectricllc.com/' target='_blank' rel="noreferrer">
                                    <button onClick={() => handleButtonClick('Powersmart', 'Live')}>Live</button>
                                </a>
                            </div>
                        </div>
                </div>
                <div data-aos='fade-down' className='project'>
                        <img src={Wiresmart} alt='Wiresmart' />
                        <p>WireSmart Electrical</p>
                        <div className='project-text'>
                            <p>Created a website for an electrician client</p>
                            <p>HTML, CSS, Bootstrap</p>
                            <div>
                                <a href='https://wiresmartelectrical.in/' target='_blank' rel="noreferrer">
                                    <button onClick={() => handleButtonClick('Wiresmart', 'Live')}>Live</button>
                                </a>
                            </div>
                        </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={Lyfe} alt='Lyfe' />
                    <p>Lyfe</p>
                    <div className='project-text'>
                        <p>Recreated landing page based on Lyfe's website layout</p>
                        <p>HTML, CSS, SCSS, JavaScript</p>
                        <div>
                            <a href='https://tsefat2143.github.io/Lyfe/' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('Lyfe', 'Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Lyfe' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('Lyfe', 'Github')}>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={Sneaker} alt='Sneaker' />
                    <p>Sneaker Store</p>  
                    <div className='project-text'>
                        <p>Created a shopify store that sells merchandise</p>
                        <p>Password: rteimp</p>
                        <div>
                            <a href='https://sneaker-store-development.myshopify.com/' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('Store', 'Live')}>Live</button>
                            </a>
                        </div>
                    </div>  
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={nemail} alt='nemail' />
                    <p>Newsletter</p>
                    <div className='project-text'>
                        <p>Created a newsletter email from Fullstack Academy</p>
                        <p>HTML, CSS</p>
                        <div>
                            <a href='https://tsefat2143.github.io/News-Letter/' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('NEmail', 'Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/News-Letter' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('NEmail', 'Github')}>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={temail} alt='temail' />
                    <p>Transactional Email</p>
                    <div className='project-text'>
                        <p>Created a transactional email from pure prescriptions</p>
                        <p>HTML, CSS</p>
                        <div>
                            <a href='https://tsefat2143.github.io/Transactional-Email/' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('TEmail', 'Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Transactional-Email' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('TEmail', 'Github')}>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={pemail} alt='pemail' />
                    <p>Promotional Email</p>
                    <div className='project-text'>
                        <p>Created a promotional email from fully</p>
                        <p>HTML, CSS</p>
                        <div>
                            <a href='https://tsefat2143.github.io/Promotional-Email/' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('PEmail', 'Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Promotional-Email' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('PEmail', 'Github')}>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-down' className='project'>
                        <img src={Restaurant} alt='Restaurant' />
                        <p>Mike's Diner</p>
                        <div className='project-text'>
                            <p>Created a restaurant website</p>
                            <p>WordPress, PHP</p>
                            <div>
                                <a href='https://mikesrestaurant.in/' target='_blank' rel="noreferrer">
                                    <button onClick={() => handleButtonClick('Restaurant', 'Live')}>Live</button>
                                </a>
                            </div>
                        </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={Fitness} alt='Fitness' />
                    <p>Fitness Blog</p>
                    <div className='project-text'>
                        <p>Created a page about a training program</p>
                        <p>WordPress</p>
                        <div>
                            <a href='https://fitness917475285.wordpress.com/' target='_blank' rel="noreferrer">
                                <button onClick={() => handleButtonClick('Fitness', 'Live')}>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project