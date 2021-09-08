import React, {useRef} from 'react'
import emailJS from 'emailjs-com'
import './contact.css'

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailJS.sendForm('service_3xj8fgi','template_i3uuhck',e.target,'user_Tr2MGTU6Scux9JCSmlMwl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();
    }

    return (
        <div className='contact-div'>
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
                <input type="submit" class='button' value="Send" />
            </form>
        </div>
    )
}

export default Contact
