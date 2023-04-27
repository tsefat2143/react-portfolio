//import Graduation from './graduation.gif'
import Wiresmart from './wiresmart.gif'
import Powersmart from './powersmart.gif'
import Fitness from './wordpress.gif'
import Sneaker from './shopify.gif'
import Lyfe from './lyfe.gif'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './project.css'
import ReactGA from "react-ga4";
import temail from './temail.gif';
import pemail from './pemail.gif'
import nemail from './nemail.gif'
import Restaurant from './restaurant.gif'


const projectAnalytics = (project) => {
    ReactGA.event({
        action:`${project}_action`,
        category:'project_category',
        label:'project_label',
        value:`xxxx${project[0]}`
    })
    console.log(project, project[0].toLowerCase());
}

const Project = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

    return (
        <div className='project-div' id='project'>
            <h1 data-aos='fade-down'>PROJECTS I'VE BUILT</h1>
            <div className='project-container'>
{/*                 <div data-aos='fade-down' className='project'>
                        <img src={Powersmart} alt='Powersmart' />
                        <p>Power Smart Electric</p>
                        <div className='project-text'>
                            <p>Created a website for an electrician client</p>
                            <p>HTML, CSS, JavaScript, jQuery, AJAX, SQL, PHP</p>
                            <div>
                                <a href='' target='_blank' rel="noreferrer">
                                    <button>Live</button>
                                </a>
                            </div>
                        </div>
                </div> */}
                <div data-aos='fade-down' className='project'>
                        <img src={Wiresmart} alt='Wiresmart' />
                        <p>WireSmart Electrical</p>
                        <div className='project-text'>
                            <p>Created a website for an electrician client</p>
                            <p>HTML, CSS, Bootstrap</p>
                            <div>
                                <a href='https://wiresmartelectrical.netlify.app/' target='_blank' rel="noreferrer">
                                    <button onClick={projectAnalytics('Wiresmart_Live')}>Live</button>
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
                                    <button onClick={projectAnalytics('Restaurant_Live')}>Live</button>
                                </a>
                            </div>
                        </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={Lyfe} alt='Lyfe' />
                    <p>Lyfe</p>
                    <div className='project-text'>
                        <p>Created a Landing Page based on Lyfes Website</p>
                        <p>HTML, CSS, SCSS, JavaScript</p>
                        <div>
                            <a href='https://tsefat2143.github.io/Lyfe/' target='_blank' rel="noreferrer">
                                <button onClick={projectAnalytics('Lyfe_Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Lyfe' target='_blank' rel="noreferrer">
                                <button onClick={projectAnalytics('Lyfe_Code')}>Github</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-down' className='project'>
                    <img src={Sneaker} alt='Sneaker' />
                    <p>Sneaker Store Development</p>  
                    <div className='project-text'>
                        <p>Created a shopify store that sells merchandise</p>
                        <p>Password: rteimp</p>
                        <div>
                            <a href='https://sneaker-store-development.myshopify.com/' target='_blank' rel="noreferrer">
                                <button onClick={projectAnalytics('Store_Live')}>Live</button>
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
                                <button onClick={projectAnalytics('NEmail_Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/News-Letter' target='_blank' rel="noreferrer">
                                <button onClick={projectAnalytics('NEmail_Code')}>Github</button>
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
                                <button onClick={projectAnalytics('TEmail_Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Transactional-Email' target='_blank' rel="noreferrer">
                                <button onClick={projectAnalytics('TEmail_Code')}>Github</button>
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
                                <button onClick={projectAnalytics('PEmail_Live')}>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Promotional-Email' target='_blank' rel="noreferrer">
                                <button onClick={projectAnalytics('PEmail_Code')}>Github</button>
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
                                <button onClick={projectAnalytics('Fitness_Live')}>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project