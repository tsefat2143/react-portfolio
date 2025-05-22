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
                    Hi,
                    <span class="line-break">I am Tajdidul Sefat,</span>   
                    <span class="line-break"> 
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Content Editor', 'Web Producer', 'Email Developer'],
                                pauseFor: 1000,
                                autoStart: true,
                                loop: true,
                            }}
                        />   
                    </span>     
                </h1>
                <Socials />
            </div>
        </div>
    )
}

export default Home
