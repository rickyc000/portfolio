
import locomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'
// import { Link, Element } from 'react-scroll'
import Projects from './components/Projects'

import './styles/main.scss'
import './styles/base.css'

const navSections = ['projects', 'experience', 'events', 'contact']

function App() {

  const scrollRef = React.createRef()

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })
    console.log(scroll)
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

          <div data-scroll-section className="experience-section" id="experience">
            <div data-scroll data-scroll-direction="vertical" data-scroll-speed="-.5" data-scroll-class="appear" className="heading">
              Experience
            </div>
          </div>

          <div data-scroll-section className="events-section" id="events">
            <div className="heading">
              Events
            </div>
          </div>

          <div data-scroll-section className="contact-section" id="contact">
            <div className="heading">
              Contact
            </div>
          </div>

        </div>
      </div>

    </main >
  )
}


export default App

