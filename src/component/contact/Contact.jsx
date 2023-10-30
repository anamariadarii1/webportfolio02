//import React from 'react'
import './Contact.css'
import {GoMail} from 'react-icons/go'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import {ImWhatsapp} from 'react-icons/im'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cvmhibb1', 'template_4non3vv', form.current, 'J5sRFWH5AgBZYFt2N')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <GoMail className='contact__icon'/>
            <h4>Email</h4>
            <h5>anamariadarii1@gmail.com</h5>
            <a href='mailto:anamariadarii1@gmail.com' target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <ImWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+40 763 400 031</h5>
            <a href='https://api.whatsapp.com/send?phone+40763400031' target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section >
  )
}

export default Contact