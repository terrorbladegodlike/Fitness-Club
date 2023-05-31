import React from 'react'
import './programs.css'
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <sectiion className="programs" id="programs">
      {/* HEADER */}
      <div className="programs__header">
        <span className='stroke__text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke__text'>to shape you</span>
      </div>

      <div className="programs__categories">
        {programsData.map((program) => (
            <div className="category">
              {program.image}
              <span className='category__title'>{program.heading}</span>
              <span className='categoty__description'>{program.details}</span>
              <div className="join__now"><span>Join Now</span><img src={RightArrow} alt="arrow" className='join__img'/></div>
            </div>
            ))}
      </div>

    </sectiion>
  )
}

export default Programs