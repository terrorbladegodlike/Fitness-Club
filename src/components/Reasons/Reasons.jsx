import React from 'react'
import './reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
   return (
      <section className="reasons" id='reasons'>
         <div className="left-r">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
         </div>
         <div className="right-l">
            <span className='reasons__title'>some reasons</span>

            <div className="reasons__inner">
               <span className='stroke__text'>why </span>
               <span className='reasons__text'> choose us?</span>
            </div>

            <div className='details'>
               <div className='details__item'>
                  <img className='details__item-icon' src={tick} alt=""></img>
                  <span className='datails__item-sub'>over 140+ expert coachs</span>
               </div>
               <div className='details__item'>
                  <img className='details__item-icon' src={tick} alt=""></img>
                  <span className='datails__item-sub'>train smarter and faster than before</span>
               </div>
               <div className='details__item'>
                  <img className='details__item-icon' src={tick} alt=""></img>
                  <span className='datails__item-sub'>I free program from new member</span>
               </div>
               <div className='details__item'>
                  <img className='details__item-icon' src={tick} alt=""></img>
                  <span className='datails__item-sub'>Reliable partners</span>
               </div>
            </div>

            <span className='details__partners'>Our Partners</span>

            <div className="partners__inner">
               <img src={nike} alt="" className='partners__inner-icon'/>
               <img src={adidas} alt="" className='partners__inner-icon'/>
               <img src={nb} alt="" className='partners__inner-icon'/>
            </div>

         </div>
      </section>
   )
}

export default Reasons