import { Link } from 'react-router-dom'
import './home.css'

const home = () => {
    return (
        <div className='home'>
            <div className='title'>
                <h1>
                    <p>Hi,</p>
                    <p>I am Tajdidul Sefat,</p>
                    <p>Software Developer</p>
                </h1>
                <Link to='about'>
                    <button>About Me</button>
                </Link>
            </div>            
        </div>
    )
}

export default home
