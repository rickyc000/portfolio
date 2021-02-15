
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
      <div className="nav-section" data-scroll-sticky data-scroll-target="#fixed-target" >
        <ul className="nav-bar">
          {navSections.map((section =>
            // <Link
            //   key={section}
            //   activeClass="active"
            //   className={section}
            //   to={section}
            //   spy={true}
            //   smooth={true}
            //   duration={1000} >
            <li key={section}>
              <a href={`#${section}`} data-scroll-to> {section}</a>
            </li>
            // </ Link>
          ))}
        </ul>
      </div>

      <div>
        <div>

          {/* <Element name="projects" className="projects"> */}
          <div
            data-scroll-section
            className="projects-section"
            id="projects"
          >
            <div>
              Projects
            </div>
          </div>
          {/* </Element> */}
          {/* <Element name="experience" className="experience"> */}
          <div data-scroll-section className="experience-section" id="experience">
            <div>
              Experience
            </div>
          </div>
          {/* </Element> */}
          {/* <Element name="events" className="events"> */}
          <div data-scroll-section className="events-section" id="events">
            <div>
              Events
            </div>
          </div>
          {/* </Element> */}
          {/* <Element name="contact" className="contact"> */}
          <div data-scroll-section className="contact-section" id="contact">
            <div>
              Contact
            </div>
          </div>
          {/* </Element> */}
        </div>
      </div>

    </main >
  )
}


export default App

