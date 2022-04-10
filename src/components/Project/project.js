import React from 'react'
import Twitter from './twitter.png'
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
                    <a href='https://sneaker-store-development.myshopify.com/'
                        target='_blank' rel="noreferrer">
                        <img src={Sneaker} alt='Sneaker' />
                        <p>Sneaker Store Development</p>
                    </a>
                </div>
                <div className='project'>
                    <a href='https://fitness917475285.wordpress.com/'
                        target='_blank' rel="noreferrer">
                        <img src={Fitness} alt='Fitness' />
                        <p>Fitness Blog</p>
                    </a>
                </div>
                <div className='project'>
                    <a href='https://www.wiresmartelectrical.com/'
                        target='_blank' rel="noreferrer">
                        <img src={Wiresmart} alt='Wiresmart' />
                        <p>WireSmart Electrical</p>
                    </a>
                </div>
                <div className='project'>
                    <a href='https://github.com/tsefat2143/Graduation-Form'
                        target='_blank' rel="noreferrer">
                        <img src={Graduation} alt='Graduation' />
                        <p>Graduation</p>
                    </a>
                </div>
               {/*  <div className='project'>
                    <a href='https://github.com/tsefat2143/Volcano-Tracker'
                        target='_blank' rel="noreferrer">
                        <img src={Volcano} alt='Volcano' />
                        <p>Volcano Tracker</p>
                    </a>
                </div> */}
                {/* <div className='project'>
                    <a href='https://github.com/tsefat2143/SimpleTweet'
                        target='_blank' rel="noreferrer">
                        <img src={Twitter} alt='Twitter' />
                        <p>Simple Tweet</p>
                    </a>
                </div> */}
                <div className='project'>
                    <a href='https://github.com/tsefat2143/Car-Slideshow-Landing-Page'
                        target='_blank' rel="noreferrer">
                        <img src={Cars} alt='Cars' />
                        <p>Cars Landing Page</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default project