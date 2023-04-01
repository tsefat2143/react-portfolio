import Socials from '../Socials/socials'
import Typewriter from "typewriter-effect";
import night from './night.jpg'
import './home.css'

const Home = () => {
    return (
        <div className='home' id='/'>
            <div className='background-div'>
                <img src={night} alt='night'/>
            </div>
            <div className='title'>
                <h1>
                    <p>Hi,</p>
                    <p>I am Tajdidul Sefat,</p>
                    <p>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Content Editor', 'Web Producer', 'Email Developer'],
                                pauseFor: 1000,
                                autoStart: true,
                                loop: true,
                            }}/>
                    </p>
                </h1>
                <Socials />
            </div>
        </div>
    )
}

export default Home
