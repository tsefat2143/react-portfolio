import Socials from '../Socials/socials'
import Typewriter from "typewriter-effect";
import beach from '../../beach.mp4'
import './home.css'

const Home = () => {
    return (
        <div className='home' id='/'>
            <video autoPlay loop muted>
                <source src={beach}></source>
            </video>
            <div className='title'>
                <h1>
                    <p>Hi,</p>
                    <p>I am Tajdidul Sefat,</p>
                    <p>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Content Editor', 'Web Producer'],
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
