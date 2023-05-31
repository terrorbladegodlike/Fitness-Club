import React from 'react'
import './plans.css'
import { plansData } from './../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <section className="plans__container">

      <div className="blur plans__blur-1"></div>
      <div className="blur plans__blur-2"></div>

      <div className="programs__header">
         <span className='stroke__text'>Ready to start</span>
         <span>Your Journey</span>
         <span className='stroke__text'>Now Withus</span>
      </div>

      {/* PLANS CARD */}

      <div className="plans">
         {plansData.map((plan, i) => (
            <div className="plan" key={i}>
               {plan.icon}
               <span>{plan.name}</span>
               <span>$ {plan.price}</span>

               <div className="features">
                  {plan.features.map((feature, i) => (
                     <div className="feature">
                        <img src={whiteTick} alt="whiteTick" />
                        <span key={i}>{feature}</span>
                     </div>
                  ))}
               </div>

               <div>
                  <span>
                     See more benefits ->
                  </span>
               </div>

               <button className='btn'>Join Now</button>
            </div>
         ))}
      </div>

    </section>
  )
}

export default Plans