import emailJS from 'emailjs-com'
import './contact.css'

const Contact = () => {    
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
        <div className='contact-div' id='contact'>
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
