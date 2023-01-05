import React from 'react'
import './about.css'
import Skills from './Skills'

const About = () => {
  return (
    <>
      <section id='about'>
        <h2>About</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src="" alt=""></img>
            </div>
          </div>
          <div className='about__contents'>
            <div className='about__cards'>
              <article className='abou__card'>
                <h5>Experience</h5>
                <small></small>
              </article>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About