import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="form-design">
      <form action="https://formsubmit.co/nayeemhossain108@gmail.com" method="POST">
        <input className="input" type="text" placeholder="Your Name" required /> <br/>
        <input className="input" type="email" placeholder="Enter Your Email" required /><br/>
        <input className="input" type="text" placeholder="Subject" required /><br/>
        <textarea className="input-area" type="text" placeholder="Your Message" required /><br/>
        <input className="response-btn" type="submit" value="Send Message" />
        
        
      
    </form>
    </div>
  );
};

export default Contact;