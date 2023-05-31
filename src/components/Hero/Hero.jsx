import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {

   const transition = {type: 'spring', duration: 3}
   const mobile = window.innerWidth <= 768 ? true : false; 

  return (
    <div className="hero" id='home'>

      <div className="blur hero__blur"></div>

      <div className="left-h">
         <Header/>

         {/* THE BEST */}
         <div className="thebest__ad">
            <motion.div
               initial={{left: mobile ? '165px' : '238px'}}
               whileInView={{left: '9px'}}
               transition={{...transition, type: 'tween'}}
            
            ></motion.div>
            <span>the best fitness club in the town</span>
         </div>

         {/* HERO HEADING */}

         <div className="hero__text">
            <div>
               <span className='stroke__text'>Shape </span>
               <span>Your</span>
            </div>
            <div>
               <span>Ideal body</span>
            </div>
            <div>
               <span>
                  In here we will help you to shape and build your ideal body and live up your life to fullest
               </span>
            </div>
         </div>

         {/* FIGURES */}
         <div className="figures">
            <div className='figures__item'>
               <span className='figures__item-title'>
                  <NumberCounter end={140} start = {75} delay='4' preFix='+'/> 
               </span>
               <span className='figures__item-text'>exspert coachs</span>
            </div>
            <div className='figures__item'>
               <span className='figures__item-title'>
                  <NumberCounter end={978} start = {650} delay='4' preFix='+'/> 
               </span>
               <span className='figures__item-text'>members joined</span>
            </div>
            <div className='figures__item'>
               <span className='figures__item-title'>
                  <NumberCounter end={50} start = {30} delay='4' preFix='+'/> 
               </span>
               <span className='figures__item-text'>fitress programs</span>
            </div>
         </div>

         {/* HERO BUTTONS */}
         <div className="hero__buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
         </div>
      </div>
      <div className="right-h">
         <button className='btn'>Join Now</button>

         {/* HEADER RATE */}
         <motion.div
         initial={{right: '-1rem'}}
         whileInView={{right: '4rem'}}
         transition={transition}
         className="header__rate">
            <img src={Heart} alt="heart" className='header__rate-img' />
            <span className='header__rate-title'>Heart Rate</span>
            <span className='header__rate-text'>116 bpm</span>
         </motion.div>

         {/* HERO IMAGES */}
         <img src={hero_image} alt="hero_image" className='hero__image' />
         <motion.img
         initial={{right: '11rem'}}
         whileInView={{right: '20rem'}}
         transition={transition}
         src={hero_image_back} alt="hero_image_back" className='hero__image-back'/>

         {/* CALORIES */}
         <motion.div
         initial={{right: '37rem'}}
         whileInView={{right: '28rem'}}
         transition={transition}
         className="calories">
            <img src={Calories} alt="calories" className='calories__image' />
            <div className='calories__inner'>
               <span className='calories__title'>Calories Burned</span>
               <span className='calories__text'>220 kcal</span>
            </div>
         </motion.div>

      </div>
    </div>
  )
}

export default Hero