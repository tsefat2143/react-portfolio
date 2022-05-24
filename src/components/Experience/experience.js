import './experience.css'

const Experience = () => {
    return (
        <div className='work-experience' id='work-experience'>
            <h1>RELEVANT EXPERIENCE</h1>
                <div className='content'>
                    <h2 className='position'>Web Developer</h2>
                    <h2 className='workplace'>
                        <a href='https://www.wiresmartelectrical.com/'
                        target='_blank' rel="noreferrer">
                            WireSmart Electrical LLC
                        </a>
                    </h2>
                    <h3 className='date'>August 2021 - October 2021</h3>
                    <ul className='task'>
                        <li>
                            Created a website to promote client's electrician business.
                        </li>
                    </ul>
                </div>

                <div className='content'>
                    <h2 className='position'>Full Stack Developer</h2>
                    <h2 className='workplace'>
                        <span style={{color:'#0c0c80'}}>Good</span><span style={{color:'orange'}}>MD</span>
                    </h2>
                    <h3 className='date'>January 2021 - September 2021</h3>
                    <ul className='task'>
                        <li>
                            React & Google Firebase.
                        </li>
                        <li>
                            Used React to display frontend of healthcare website.
                        </li>
                        <li>
                            Used Firebase to implement user authentication.
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default Experience
