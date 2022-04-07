import React from 'react'
import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa";
import './socials.css'

const socials = () => {
    return (
        <div className='socials'>
            <a href='https://github.com/tsefat2143' target='_blank' rel="noreferrer">
                <FaGithub size={50}/>
            </a>
            <a href='https://www.linkedin.com/in/tajdidul-sefat/' target='_blank' rel="noreferrer">
                <FaLinkedin size={50}/>
            </a>
            <a href='https://angel.co/u/tajdidul-sefat' target='_blank' rel="noreferrer">
                <FaAngellist size={50}/>
            </a>             
        </div>
    )
}

export default socials