import React from 'react'
import './join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Join = () => {

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault(); 
      emailjs.sendForm('service_gkazvh6', 'template_opmrxpk', form.current, '7lAEHSjdlkazjwmEY')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
      };

  return (
    <section className="join" id="join">
      <div className="left-j">
         <hr className='join__block'/>
         <div className='join__inner'>
            <span className='stroke__text'>Ready to</span>
            <span> Level Up</span>
         </div>
         <div className="join__inner">
            <span>Your body</span>
            <span className='stroke__text'> With us?</span>
         </div>
      </div>
      <div className="right-j">

         <form ref={form} action="" className="email__container" onSubmit={sendEmail}>
            <input type="email" name='user__email' placeholder='Enter your email address' className='join__input'/>
            <button className='btn btn-j'>Join Now</button>
         </form>

      </div>
    </section>
  )
}

export default Join