
import locomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'

import Projects from './components/Projects'
import Experience from './components/Experience'
import Events from './components/Events'

import './styles/main.scss'
import './styles/base.css'

import Smiley from './assets/icons/Smiley.js'
import Mail from './assets/icons/Mail.js'
import ExternalLink from './assets/icons/ExtLinkIcon.js'
import GitHubIcon from './assets/icons/GitHubIcon.js'

// import downChevron from './assets/icons/icons8-chevron-down-96.png'



const navSections = ['projects', 'experience', 'skills', 'events', 'contact']

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
          <li className="home-button">
            <a href="#about" data-scroll-to>
              <Smiley />
            </a>

          </li>

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
            <div className="title-section" data-scroll data-scroll-speed="-4">

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
                fill="black"
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

          <div data-scroll-section className="experience-section" id="experience"  >
            <div data-scroll className="heading">
              Experience
            </div>
            <Experience />
          </div>

          <div data-scroll-section className="skills-section" id="skills"  >
            <div data-scroll className="heading">
              Skills
            </div>
            Skills section text
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
                <a href="mailto:r.cato@live.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={30} />
                  Email</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ricky-cato/" target="_blank" rel="noopener noreferrer"><ExternalLink size={32} color={'white'} />LinkedIn</a>
              </div>
              <div>
                <a href="https://github.com/rickyc000" target="_blank" rel="noopener noreferrer"><GitHubIcon size={32} color={'white'} />GitHub</a>
              </div>
            </div>
            <div className="back-to-top-wrapper">
              <div className="back-to-top">
                <a href="#about" data-scroll-to>
                  <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </main >
  )
}


export default App

