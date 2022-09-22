//import Graduation from './graduation.gif'
import Wiresmart from './wiresmart.gif'
import Powersmart from './powersmart.gif'
//import Cars from './car.gif'
import Fitness from './wordpress.gif'
import Sneaker from './shopify.gif'
import Lyfe from './lyfe.gif'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './project.css'
import ReactGA from "react-ga4";


const projectAnalytics = () => {
    ReactGA.event({
        action:'project_action',
        category:'project_category',
        label:'project_label',
        value:'xxxxx'
    })
    console.log(ReactGA.event(['action']));
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
                                    <button onClick={projectAnalytics()}>Live</button>
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
                                <button>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Lyfe' target='_blank' rel="noreferrer">
                                <button>Github</button>
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
                                <button>Live</button>
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
                                <button>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
{/*                 <div className='project'>
                    <img src={Cars} alt='Cars' />
                    <p>Cars Landing Page</p>
                    <div className='project-text'>
                        <p>Created a cars landing page slideshow</p>
                        <p>HTML, CSS, JavaScript</p>
                        <div>
                            <a href='https://car-slideshow.netlify.app/' target='_blank' rel="noreferrer">
                                <button>Live</button>
                            </a>
                            <a href='https://github.com/tsefat2143/Car-Slideshow-Landing-Page' target='_blank' rel="noreferrer">
                                <button>Github</button>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Project