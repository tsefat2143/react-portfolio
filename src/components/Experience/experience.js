import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import './experience.css'

const Experience = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

    return (
        <div className='work-experience' id='work-experience'>
            <h2 data-aos='fade-down'>RELEVANT EXPERIENCE</h2>

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h3 className='position'>Web Developer</h3>
                    <h4 className='workplace'>Saga Beauty Care</h4>
                    <h5 className='date'>August 2023 - December 2023</h5>
                    <ul className='task'>
                        <li>Technologies: WooCommerce, WordPress, PHP, JavaScript, AJAX</li>
                        <li>Redesigned and developed a custom WordPress e-commerce site for Saga Beauty Care.</li>
                        <li>Integrated Stripe and PayPal for payment processing.</li>
                        <li>Utilized SEO best practices including the use of proper meta tags to enhance the website’s visibility on search engines.</li>
                    </ul>
                </div>

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h3 className='position'>Web Developer</h3>
                    <h4 className='workplace'>Power Smart Electric LLC</h4>
                    <h5 className='date'>April 2023 - December 2023</h5>
                    <ul className='task'>
                        <li>Technologies: HTML, CSS, JavaScript, jQuery, AJAX, SQL, PHP</li>
                        <li>Designed and developed a fully responsive website to promote the electrician business, improving online visibility and customer engagement</li>
                        <li>Built a custom backend rating system using PHP and SQL that enabled customers to leave reviews, increasing client feedback and trust.</li>
                        <li>Collaborated closely with the client to align design and functionality with business goals.</li>
                    </ul>
                </div>

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h3 className='position'>Web Developer</h3>
                    <h4 className='workplace'>WireSmart Electrical LLC</h4>
                    <h5 className='date'>March 2023 - June 2023</h5>
                    <ul className='task'>
                        <li>Technologies: HTML, CSS, Bootstrap</li>
                        <li>Developed a clean, mobile-friendly website to showcase the electrical services offered, leading to improved user experience and client inquiries.</li>
                        <li>Implemented Bootstrap components for rapid styling and responsiveness.</li>
                    </ul>
                </div>

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h3 className='position'>Analyst Quality Assurance</h3>
                    <h4 className='workplace'>PNC Financial Services</h4>
                    <h5 className='date'>July 2022 - February 2023</h5>
                    <ul className='task'>
                        <li>Technologies: SQL, Python</li>
                        <li>Wrote complex SQL queries to validate and verify business logic across multiple datasets, ensuring data integrity for financial processes.</li>
                        <li>Automated testing workflows using Python scripts, reducing manual testing time by 40%.</li>
                        <li>Collaborated with cross-functional teams to identify defects and improve data accuracy.</li>
                    </ul>
                </div>

                <div data-aos={window.innerWidth>=860 ? 'fade-left': 'fade-down'} className='content'>
                    <h3 className='position'>Full Stack Developer</h3>
                    <h4 className='workplace'>GoodMD</h4>
                    <h5 className='date'>January 2021 - September 2021</h5>
                    <ul className='task'>
                        <li>Technologies: React, Google Firebase.</li>
                        <li>Developed frontend UI components using React for a healthcare platform, enhancing user engagement and interface usability.</li>
                        <li>Integrated Firebase for secure user authentication and data storage, ensuring compliance with privacy standards.</li>
                        <li>Participated in iterative design and testing cycles to refine app features based on user feedback.</li>
                    </ul>
            </div>
        </div>
    )
}

export default Experience
