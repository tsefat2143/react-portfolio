import React from 'react'
import java from './java.png'
import javascript from './js.png'
import python from './python.png'
import php from './php.png'
import html from './html.png'
import css from './css.png'
import bootstrap from './bootstrap.png'
import react from './react.png'
import nodejs from './node.png'
import mysql from './mysql.png'
import mongodb from './mongoDB.jpg'
import git from './git.png'
import firebase from './firebase.png'
import netlify from './netlify.png'
import Wordpress from './WordPress.png'
import Shopify from './Shopify.jpg'
import './skills.css'

const skills = () => {
    return (
        <div className='skills-div' id="skills">
            <h1>SKILLS</h1>
            <div className='progLang-div'>
                <h2>Programming Languages</h2>
                    <div className='img-div'>
                        <div className='prog-div'>
                            <img src={java} alt='java' />
                            <p>Java</p>
                        </div>
                        <div className='prog-div'>
                            <img src={javascript} alt='javascript' />
                            <p>JavaScript</p>
                        </div>
                        <div className='prog-div'>
                            <img src={php} alt='php' />
                            <p>PHP</p>
                        </div>
                        <div className='prog-div'>
                            <img src={python} alt='python' />
                            <p>Python</p>
                        </div>
                    </div>
            </div>
            <div className='frontend-div'>
                <h2>Frontend</h2>
                <div className='img-div'>
                    <div className='front-div'>
                        <img src={html} alt='HTML' />
                        <p>HTML</p>
                    </div>
                    <div className='front-div'>
                        <img src={css} alt='CSS' />
                        <p>CSS</p>
                    </div>
                    <div className='front-div'>
                        <img src={bootstrap} alt='bootstrap' style={{borderRadius:'20px'}}/>
                        <p>BootStrap</p>
                    </div>
                    <div className='front-div'>
                        <img src={react} alt='react'/>
                        <p>React</p>
                    </div>
                </div>
            </div>
            <div className='backend-div'>
                <h2>Backend</h2>
                <div className='img-div'>
                    <div className='back-div'>
                        <img src={nodejs} alt='nodeJS' />
                        <p>NodeJS</p>
                    </div>
                    <div className='back-div'>
                        <img src={mysql} alt='mysql' />
                        <p>MYSQL</p>
                    </div>
                    {/* <div className='back-div'>
                        <img src={mongodb} alt='mongoDB' />
                        <p>MongoDB</p>
                    </div> */}
                </div>
            </div>
            <div className='cms-div'>
                <h2>Content Management Systems</h2>
                <div className='img-div'>
                    <div className='content-div'>
                        <img src={Wordpress} alt='Wordpress' />
                        <p>WordPress</p>
                    </div>
                    <div className='back-div'>
                        <img src={Shopify} alt='Shopify' />
                        <p>Shopify</p>
                    </div>
                </div>
            </div>
            <div className='tools-div'>
                <h2>Other Tools</h2>
                <div className='img-div'>
                    <div className='otherTools-div'>
                        <img src={git} alt='git' />
                        <p>Git</p>
                    </div>
                    <div className='back-div'>
                        <img src={firebase} alt='firebase' />
                        <p>Google Firebase</p>
                    </div>
                    <div className='back-div'>
                        <img src={netlify} alt='netlify' />
                        <p>Netlify</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills
