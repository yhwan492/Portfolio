import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import {SiHaskell, SiHtml5, SiCss3, SiPython, SiCplusplus, SiRubyonrails, SiReact, SiVuedotjs, SiJavascript,
   SiJava, SiDjango, SiNodedotjs,SiPostgresql,SiMysql} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article id="experience__details">
              <SiHtml5 />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article id="experience__details">
              <SiCss3/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article id="experience__details">
              <SiJavascript />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article id="experience__details">
              <SiReact />
              <h4>React.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article id="experience__details">
              <SiVuedotjs />
              <h4>Vue.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article id="experience__details">
              <SiDjango />
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        <div className="expeirence__backend">
        <h3>Backend</h3>
          <div className="experience__content">
            <article id="experience__details">
              <SiCplusplus />
              <h4>C++</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article id="experience__details">
              <SiPython />
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article id="experience__details">
              <SiNodedotjs />
              <h4>Node.js</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article id="experience__details">
              <SiJava />
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article id="experience__details">
              <AiOutlineConsoleSql />
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article id="experience__details">
              <SiRubyonrails />
              <h4>Ruby on Rails</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article id="experience__details">
              <SiHaskell />
              <h4>Haskell</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience