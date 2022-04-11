import React from 'react'
import Graduation from './graduation.jpg'
import Volcano from './volcano.png'
import Wiresmart from './wiresmart.png'
import Cars from './car.jpg'
import Fitness from './fitness.png'
import Sneaker from './Sneaker.jpg'
import './project.css'

const project = () => {
    return (
        <div className='project-div' id='project'>
            <h1>PROJECTS I'VE BUILT</h1>
            <div className='project-container'>
                <div className='project'>
                    <img src={Sneaker} alt='Sneaker' />
                    <div className='square'>
                        <p>Password:rteimp</p>
                        <p>
                            <a href='https://sneaker-store-development.myshopify.com/'
                            target='_blank' rel="noreferrer">
                                See Live
                            </a>
                        </p>
                    </div>
                    <p>Sneaker Store Development</p>    
                </div>
                <div className='project'>
                    <img src={Fitness} alt='Fitness' />
                    <div className='square'>
                        <p>
                            <a href='https://fitness917475285.wordpress.com/'
                            target='_blank' rel="noreferrer">
                                See Live
                            </a>
                        </p>
                    </div>
                    <p>Fitness Blog</p>
                </div>
                <div className='project'>
                    <img src={Wiresmart} alt='Wiresmart' />
                    <div className='square'>
                        <p>
                            <a href='https://www.wiresmartelectrical.com/'
                            target='_blank' rel="noreferrer">
                                See Live
                            </a>
                        </p>
                    </div>
                    <p>WireSmart Electrical</p>
                </div>
                <div className='project'>
                    <img src={Graduation} alt='Graduation' />
                    <div className='square'>
                        <p>
                            <a href='https://github.com/tsefat2143/Graduation-Form'
                            target='_blank' rel="noreferrer">
                                See Code
                            </a>
                        </p>
                    </div>
                    <p>Graduation</p>
                </div>
               {/*  <div className='project'>
                    <a href='https://github.com/tsefat2143/Volcano-Tracker'
                        target='_blank' rel="noreferrer">
                        <img src={Volcano} alt='Volcano' />
                        <p>Volcano Tracker</p>
                    </a>
                </div> */}
{/*                 <div className='project'>
                    <a href='https://github.com/tsefat2143/Car-Slideshow-Landing-Page'
                        target='_blank' rel="noreferrer">
                        <img src={Cars} alt='Cars' />
                        <p>Cars Landing Page</p>
                    </a>
                </div> */}
                <div className='project'>
                    <img src={Cars} alt='Cars' />
                    <div className='square'>
                        <p>
                            <a href='https://github.com/tsefat2143/Car-Slideshow-Landing-Page'
                            target='_blank' rel="noreferrer">
                                See Code
                            </a>
                        </p>
                        <p>
                            <a href='https://car-slideshow.netlify.app/'
                            target='_blank' rel="noreferrer">
                                See Live
                            </a>
                        </p>
                    </div>
                    <p>Cars Landing Page</p>
                </div>
            </div>
        </div>
    )
}

export default project