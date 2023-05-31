import React from 'react'
import './footer.css'
import {FaTelegram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import Logo from '../../assets/logo.png'

const Footer = () => {
   return (
      <footer className="footer">
         <hr className='footer__hr'/>
         <div className="footer__inner">
            <div className="social__links">
               <FaTelegram className='social__link'/>
               <AiFillGithub className='social__link'/>
               <BsInstagram className='social__link'/>
            </div>
            <div className="footer__logo">
               <img src={Logo} alt="" />
            </div>
         </div>

         <div className="blur footer__blur-1"></div>
         <div className="blur footer__blur-2"></div>
      </footer>
   )
}

export default Footer