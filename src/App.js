
import locomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'

import Projects from './components/Projects'
import Experience from './components/Experience'
import Events from './components/Events'

import './styles/main.scss'
import './styles/base.css'

// import downChevron from './assets/icons/icons8-chevron-down-96.png'



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
            <div className="title-section" data-scroll data-scroll-speed="-5">

              <h1 className="title-wrapper">
                Ricky Cato
              </h1>
              <h2 className="bio-wrapper">
                Software Engineer
              </h2>


            </div>


            <div className="scroll-down-wrapper" data-scroll data-scroll-sticky>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                fill="#4b4e53"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
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
            <div data-scroll className="heading">
              Contact
            </div>
            <div className="contact-links">
              <div>
                <a href="https://github.com/rickyc000" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ricky-cato/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div>
                <a href="mailto:r.cato@live.com" target="_blank" rel="noopener noreferrer">Email</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main >
  )
}


export default App

