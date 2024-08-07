/*
import emailJS from 'emailjs-com'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import './contact.css'
import ReactGA from 'react-ga4'

const emailAnalytics = () => {
    ReactGA.event({
        action:'email_action',
        category:'email_category',
        label:'email_label',
        value:'xxxxx'
    })
}

const Contact = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        })
    })

    function sendEmail(e){
        e.preventDefault();

        emailJS.sendForm(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE,e.target,process.env.REACT_APP_USER)
            .then((result) => {
                alert('Your Message Was Sent');
            }, (error) => {
                alert('Your Message Was Not Sent');
            })
        e.target.reset();
    }

    return (
        <div data-aos='fade-down' className='contact-div' id='contact'>
            <h1>CONTACT ME</h1>
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" className="form-control" name='name' placeholder='Name' required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name='email' placeholder='Email' required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name='subject' placeholder='Subject' required/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="10" placeholder='Enter Your Message Here' name='message' required></textarea>
                </div>
                <input type="submit" class='button' value="Send" onClick={emailAnalytics}/>
            </form>
        </div>
    )
}

export default Contact
*/