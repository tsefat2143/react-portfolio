import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const about = () => {
    return (
        <div className='about'>
            <h1>ABOUT ME</h1>
            <p>
                Hi Everyone! My name is Tajdidul Sefat and I love to code. 
                By using various programming languages I like to create 
                projects and learn new technologies to better my skills 
                as a developer. I have graduated from the City University 
                of New York at Queens College and plan to enjoy the ride 
                of software development. 
            </p>
            <p>
                I am currently a Sr. Admin Analyst at the New York Human Resources Administration. 
                I am open to other roles within the United States, so please free to 
                <Link to='contact'> contact </Link> me.
            </p>
        </div>
    )
}

export default about;
