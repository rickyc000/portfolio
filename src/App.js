
import locomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'
// import { Link, Element } from 'react-scroll'

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
            className="projects-section"
            id="projects"
          >
            <div >
              Projects
            </div>
          </div>

          <div data-scroll-section className="experience-section" id="experience">
            <div data-scroll data-scroll-direction="vertical" data-scroll-speed="-1" data-scroll-class="appear">
              Experience
            </div>
          </div>

          <div data-scroll-section className="events-section" id="events">
            <div>
              Events
            </div>
          </div>

          <div data-scroll-section className="contact-section" id="contact">
            <div>
              Contact
            </div>
          </div>

        </div>
      </div>

    </main >
  )
}


export default App

