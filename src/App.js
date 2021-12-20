
// import locomotiveScroll from 'locomotive-scroll'
// import React, { useEffect } from 'react'

import React from 'react'

import { Link } from 'react-scroll'

import Projects from './components/Projects'
import Experience from './components/Experience'
// import Events from './components/Events'
import Skills from './components/Skills'

import './styles/main.scss'
import './styles/base.css'

import Smiley from './assets/icons/Smiley.js'

// const navSections = ['projects', 'experience', 'skills', 'events', 'contact']
const navSections = ['projects', 'experience', 'skills']

function App() {

  // window.addEventListener('scroll', changeBackground)
  // const scrollRef = React.createRef()
  // useEffect(() => {
  //   setTimeout(() => {
  //     const scroll = new locomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //     })
  //     console.log(scroll)
  //   }, 400)
  // })

  const [title, setTitle] = React.useState(false)

  const bleepURL = 'https://bleep.com/'
  const ochreURL = 'https://with-ochre.com/platform'
  const generalAssemblyURL = 'https://generalassemb.ly/education/software-engineering-immersive/london'
  const artlogicURL = 'https://artlogic.net/'
  const hiyaURL = 'https://www.instagram.com/__hiy.a/'
  const linkedInURL = 'https://www.linkedin.com/in/ricky-cato/'

  const changeBackground = () => {
    window.scrollY >= 300 ? setTitle(true) : setTitle(false)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    // <main data-scroll-container ref={scrollRef}>
    <main data-scroll-container>
      <div className="nav-section">
        <ul className="nav-bar">
          <Link
            key="about"
            activeClass="active"
            className="about"
            to="about"
            spy={true}
            smooth={true}
            duration={1000} >
            <li className="home-button">
              <Smiley />
            </li>
          </ Link>
          {navSections.map((section =>
            <Link
              key={section}
              activeClass="active"
              className={section}
              to={section}
              spy={true}
              smooth={true}
              duration={1000} >
              <li key={section}>
                {section}
                {/* <a href={`#${section}`} data-scroll-to>{section}</a> */}
              </li>
            </Link>
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
              <h1 className={title ? 'title-wrapper title-active' : 'title-wrapper'}>
                Ricky Cato
              </h1>
              <h2 className={title ? 'bio-wrapper title-active' : 'bio-wrapper'}>
                is a <b>Web Developer</b> based in London. He studied Creative Music Technology at The University of Surrey, then worked at <a href={bleepURL} target="_blank" rel="noopener noreferrer" className="bio-link">Bleep</a> and <a href={ochreURL} target="_blank" rel="noopener noreferrer" className="bio-link"> Ochre</a>, for clients such as Boiler Room, Warp Records and NTS Radio, before learning to code at <a href={generalAssemblyURL} target="_blank" rel="noopener noreferrer" className="bio-link">General Assembly</a>. Ricky runs/DJs at a club night called <a href={hiyaURL} target="_blank" rel="noopener noreferrer" className="bio-link">Hiya</a> and currently works on websites for artists and galleries at <a href={artlogicURL} target="_blank" rel="noopener noreferrer" className="bio-link"> Artlogic</a>. Contact him at <a href="mailto:r.cato@live.com" target="_blank" rel="noopener noreferrer" className="bio-link">r.cato@live.com</a> or via <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="bio-link">LinkedIn</a>.
              </h2>
            </div>
            <div className="scroll-down-wrapper" data-scroll data-scroll-sticky>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
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
          <div data-scroll-section className="section-divider"></div>
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
          <div data-scroll-section className="section-divider"></div>
          <div data-scroll-section className="experience-section" id="experience"  >
            <div data-scroll className="heading">
              Experience
            </div>
            <Experience />
          </div>
          <div data-scroll-section className="section-divider"></div>
          <div data-scroll-section className="skills-section" id="skills"  >
            <div data-scroll className="heading">
              Skills
            </div>
            <Skills />
          </div>
          <div className="footer">
            <div className="back-to-top-wrapper">
              <Link
                key="about"
                activeClass="active"
                className="about"
                to="about"
                spy={true}
                smooth={true}
                duration={1000} >
                <div className="back-to-top">
                  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="#f5e41b" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                  </svg>
                </div>
              </ Link>
            </div>
            <div className="email-footer-wrapper">
              <div className="footer-email">
                <a href="mailto:r.cato@live.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* <div data-scroll-section className="section-divider-white"></div>
          <div data-scroll-section className="events-section" id="events">
            <div data-scroll className="heading">
              Events
            </div>
            <Events />
          </div> */}
          {/* <div data-scroll-section className="section-divider-white"></div> */}
          {/* <div data-scroll-section className="contact-section" id="contact">
            <div data-scroll className="heading">
              Contact
            </div>
            <div className="contact-links">
              <div>
                <a href="mailto:r.cato@live.com" target="_blank" rel="noopener noreferrer">
                  Email</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ricky-cato/" target="_blank" rel="noopener noreferrer">
                  LinkedIn</a>
              </div>
              <div>
                <a href="https://github.com/rickyc000" target="_blank" rel="noopener noreferrer">
                  GitHub</a>
              </div>
            </div>
            <div className="image-arrow-wrapper">
              <div className="back-to-top-wrapper">
                <Link
                  key="about"
                  activeClass="active"
                  className="about"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000} >
                  <div className="back-to-top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="#f5e41b" className="bi bi-arrow-up" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                  </div>
                </ Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </main >
  )
}



export default App

