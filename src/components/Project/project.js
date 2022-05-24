import React, { useEffect } from 'react'
//import Graduation from './graduation.jpg'
//import Volcano from './volcano.png'
import Wiresmart from './wiresmart.gif'
import Cars from './car.gif'
import Fitness from './wordpress.gif'
import Sneaker from './shopify.gif'
import Lyfe from './lyfe.gif'
import './project.css'

const Project = () => {
    return (
        <div className='project-div' id='project'>
            <h1>PROJECTS I'VE BUILT</h1>
            <div className='project-container'>
                <div className='project'>
                    <img src={Sneaker} alt='Sneaker' />
                    <p>Sneaker Store Development</p>  
                    <div className='project-text'>
                    <p>Password: rteimp</p>
                        <p>Created a shopify store that sells merchandise</p>
                        <div>
                            <a href='https://sneaker-store-development.myshopify.com/' target='_blank' rel="noreferrer">
                                <button>Live</button>
                            </a>
                        </div>
                    </div>  
                </div>
                <div className='project'>
                    <img src={Fitness} alt='Fitness' />
                    <p>Fitness Blog</p>
                    <div className='project-text'>
                        <p>Created a blog about workout training program</p>
                        <p>called push, pull, legs</p>
                        <div>
                            <a href='https://fitness917475285.wordpress.com/' target='_blank' rel="noreferrer">
                                <button>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img src={Wiresmart} alt='Wiresmart' />
                    <p>WireSmart Electrical</p>
                    <div className='project-text'>
                        <p>Created a website for an electrician client</p>
                        <p>HTML, CSS, Bootstrap</p>
                        <div>
                            <a href='https://www.wiresmartelectrical.com/' target='_blank' rel="noreferrer">
                                <button>Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
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
                <div className='project'>
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
                </div>
            </div>
        </div>
    )
}

export default Project