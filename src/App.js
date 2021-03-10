
// import locomotiveScroll from 'locomotive-scroll'
// import React, { useEffect } from 'react'

import React from 'react'

import { Link } from 'react-scroll'

import Projects from './components/Projects'
import Experience from './components/Experience'
import Events from './components/Events'
import Skills from './components/Skills'

import './styles/main.scss'
import './styles/base.css'

import Smiley from './assets/icons/Smiley.js'

const navSections = ['projects', 'experience', 'skills', 'events', 'contact']

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

  const [title,setTitle] = React.useState(false)

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
          {/* <Element name="experience" className="experience"> */}
          <div data-scroll-section className="experience-section" id="experience"  >
            <div data-scroll className="heading">
              Experience
            </div>
            <Experience />
          </div>
          {/* </Element> */}

          <div data-scroll-section className="section-divider"></div>


          <div data-scroll-section className="skills-section" id="skills"  >
            <div data-scroll className="heading">
              Skills
            </div>
            <Skills />
          </div>

          <div data-scroll-section className="section-divider-white"></div>


          <div data-scroll-section className="events-section" id="events">
            <div data-scroll className="heading">
              Events
            </div>
            <Events />
          </div>

          <div data-scroll-section className="section-divider-white"></div>

          <div data-scroll-section className="contact-section" id="contact">
            <div data-scroll className="heading">
              Contact
            </div>
            {/* <div className="about-wrapper">
              <div className="about-text">
                In my previous role working for a music-focused e-commerce platform, I was able to combine my love of music with a unique opportunity to help artists connect with their fans. Working closely with talented developers on a daily basis sparked my interest in software engineering which led me to studying full-time at General Assembly.{'\n'}
                {'\n'}
                I thrive when collaborating on forward-thinking and innovative projects with a passionate team of people and look forward to my career as a developer.
              </div>
            </div> */}
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

                    <svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                    </svg>

                  </div>
                </ Link>
              </div>
            </div>

          </div>

        </div>
      </div>

    </main >
  )
}



export default App

