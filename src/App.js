
import locomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'

import Projects from './components/Projects'
import Experience from './components/Experience'
import Events from './components/Events'

import './styles/main.scss'
import './styles/base.css'

import downChevron from './assets/icons/icons8-chevron-down-96.png'



const navSections = ['projects', 'experience', 'events', 'contact']

function App() {

  const scrollRef = React.createRef()

  useEffect(() => {

    setTimeout(() => {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      })
      console.log(scroll)
    }, 200)
  })


  return (
    <main data-scroll-container ref={scrollRef}>
      <div className="nav-section">
        <ul className="nav-bar">
          {navSections.map((section =>
            <li key={section}>
              <a href={`#${section}`} data-scroll-to>{section}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div>

          <div
            data-scroll-section
            className="about-section"
            id="about"
          >
            <div className="title-wrapper">
              Ricky Cato
            </div>
            <div className="bio-wrapper">
              Software Engineer
            </div>

            <div className="scroll-down-wrapper">
              <img className="scroll-down-image" src={downChevron} alt="down" width="33px"
                data-scroll />
            </div>
          </div>



          <div
            data-scroll-section
            className="projects-section"
            id="projects"
          >
            <div className="heading">
              Projects
            </div>
            <Projects />

          </div>

          <div data-scroll-section className="experience-section" id="experience" >
            <div data-scroll className="heading">
              Experience
            </div>
            <Experience />
          </div>

          <div data-scroll-section className="events-section" id="events">
            <div data-scroll className="heading">
              Events
            </div>
            <Events />
          </div>

          <div data-scroll-section className="contact-section" id="contact">
            <div  data-scroll className="heading">
              Contact
            </div>
          </div>

        </div>
      </div>

    </main >
  )
}


export default App

