
import React from 'react'

import rrecords from '../assets/projects/rrecords-crop2.png'
import sixtenSteps from '../assets/projects/16.Steps-comp.png'
import tetris from '../assets/projects/tetris-gameplay-crop.png'
import cityspace from '../assets/projects/cityspace-landing-crop.png'
// import gorillazapp from '../assets/projects/gorillazapp-track-crop.png'
import eazzze from '../assets/projects/eazzze-screenshot-comp.png'

// import ExternalLink from '../assets/icons/ExtLinkIcon.js'
// import GitHubIcon from '../assets/icons/GitHubIcon.js'


function Projects() {

  return (

    <div className="projects-content-wrapper">
      <div className="rickys-records-wrapper project-wrapper">
        <div className="project-image-wrapper">
          <a
            href="https://rickys-records.herokuapp.com/"
            target="_blank" rel="noopener noreferrer">
            <img
              src={rrecords}
              alt="Ricky's Records"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            Ricky&apos;s Records
          </div>
          <div className="project-bio">
            Ricky’s Records is a PostgreSQL and Django REST Framework full stack application with a React front-end. Built solo over the course of a week.{'\n'}
            {'\n'}
            Browse releases, listen to tracks across a range of genres and build up your own collection. Inspired by sites like NTS Radio and Bandcamp.
          </div>
          <div className="project-links">
            <a
              href="https://rickys-records.herokuapp.com/"
              target="_blank" rel="noopener noreferrer">
              {/* <ExternalLink size={32} color={'white'} /> */}
              Website
            </a>
            <a
              href="https://github.com/rickyc000/sei-project-4"
              target="_blank" rel="noopener noreferrer">
              {/* <GitHubIcon size={32} color={'white'} /> */}
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="project-wrapper">
        <div className="project-image-wrapper">
          <a
            href="https://rickyc000.github.io/16.Steps/"
            target="_blank" rel="noopener noreferrer">
            <img
              src={sixtenSteps}
              alt="16.Steps"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            16.Steps
          </div>
          <div className="project-bio">
            A JavaScript synthesizer and sequencer built using the Web Audio API.{'\n'}
            {'\n'}
            16.Steps was a solo project built after completing General Assembly’s Software Engineering Immersive course.
          </div>
          <div className="project-links">
            <a
              href="https://rickyc000.github.io/16.Steps/"
              target="_blank" rel="noopener noreferrer">
              {/* <ExternalLink size={32} color={'white'} /> */}
              Website
            </a>
            <a
              href="https://github.com/rickyc000/16.Steps"
              target="_blank" rel="noopener noreferrer">
              {/* <GitHubIcon size={32} color={'white'} /> */}
              GitHub
            </a>
          </div>
        </div>
      </div>


      <div className="cityspace-wrapper project-wrapper">
        <div className="project-image-wrapper">
          <a href="https://cityspace-app.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img
              src={cityspace}
              alt="CitySpace"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            CitySpace
          </div>
          <div className="project-bio">
            A full-stack MERN application built as part of a 4-person group project over 9 days.{'\n'}
            {'\n'}
            CitySpace is platform for discovering and sharing the best spots in London. Register and login to build-up a list of your favourite locations, add comments and add/edit your own spaces.
          </div>
          <div className="project-links">
            <a href="https://cityspace-app.herokuapp.com" target="_blank" rel="noopener noreferrer">
              {/* <ExternalLink size={32} color={'white'} /> */}
              Website
            </a>
            <a href="https://github.com/rickyc000/sei-project-3" target="_blank" rel=" noopener noreferrer">
              {/* <GitHubIcon size={32} color={'white'} /> */}
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* <div className="gorillazapp-wrapper project-wrapper">

        <div className="project-image-wrapper">
          <a href="https://gorillazapp.netlify.app" target="_blank" rel="noopener noreferrer">
            <img
              src={gorillazapp}
              alt="GorillazApp"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            GorillazApp
          </div>
          <div className="project-bio">
            Built using the iTunes Search API and React, this app lets you shuffle through and listen to tracks from the Gorillaz back catalogue.{'\n'}
            {'\n'}
            GorillazApp was a pair coded project developed in 48 hours.
          </div>
          <div className="project-links">
            <a href="https://gorillazapp.netlify.app" target="_blank" rel="noopener noreferrer"><ExternalLink size={32} color={'white'} /></a>
            <a href="https://github.com/rickyc000/sei-project-2" target="_blank" rel="noopener noreferrer"><GitHubIcon size={32} color={'white'} /></a>
          </div>
        </div>
      </div> */}

      <div className="tetris-wrapper project-wrapper">
        <div className="project-image-wrapper">
          <a
            href="https://rickyc000.github.io/sei-project-1"
            target="_blank" rel="noopener noreferrer">
            <img
              src={tetris}
              alt="Tetris"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            Tetris
          </div>
          <div className="project-bio">
            A vanilla JavaScript remake of the classic arcade game.{'\n'}
            {'\n'}
            My first solo project, the game utilises JavaScript fundamentals such as loops, array methods and conditional statements.
          </div>
          <div className="project-links">
            <a
              href="https://rickyc000.github.io/sei-project-1"
              target="_blank" rel="noopener noreferrer">
              {/* <ExternalLink size={32} color={'white'} /> */}
              Website
            </a>
            <a
              href="https://github.com/rickyc000/sei-project-1"
              target="_blank" rel="noopener noreferrer">
              {/* <GitHubIcon size={32} color={'white'} /> */}
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="rickys-records-wrapper project-wrapper">
        <div className="project-image-wrapper">
          <a
            href="https://eazzze.net/"
            target="_blank" rel="noopener noreferrer">
            <img
              src={eazzze}
              alt="eazzze"
              className="project-image"
            />
          </a>
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            eazzze.net
          </div>
          <div className="project-bio">
            Artist website with embedded Soundcloud content for hosting DJ mixes.{'\n'}
            {'\n'}
            Built using React.
          </div>
          <div className="project-links">
            <a
              href="https://eazzze.net/"
              target="_blank" rel="noopener noreferrer">
              {/* <ExternalLink size={32} color={'white'} /> */}
              Website
            </a>
            <a
              href="https://github.com/rickyc000/eazzze_site"
              target="_blank" rel="noopener noreferrer">
              {/* <GitHubIcon size={32} color={'white'} /> */}
              GitHub
            </a>
          </div>
        </div>
      </div>


    </div>

  )
}


export default Projects

