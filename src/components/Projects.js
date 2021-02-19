
import React from 'react'

import rrecords from '../assets/projects/rrecords-crop2.png'
import tetris from '../assets/projects/tetris-gameplay-crop.png'
import cityspace from '../assets/projects/cityspace-landing-crop.png'
import gorillazapp from '../assets/projects/gorillazapp-track-crop.png'

import ExternalLink from '../assets/icons/ExtLinkIcon.js'
import GitHubIcon from '../assets/icons/GitHubIcon.js'





function Projects() {

  // const projects = [{
  //   title: 'Ricky\'s Records',
  //   image: { rrecords },
  //   bio: 'Ricky’s Records is a PostgreSQL and Django REST Framework full stack application.  Browse and listen to releases across a range of genres and add them to your own collection.',
  //   demoLink: 'https://rickys-records.herokuapp.com/',
  //   gitHubLink: 'https://github.com/rickyc000/sei-project-4',
  // }]


  return (

    <div className="projects-content-wrapper">
      <div className="rickys-records-wrapper project-wrapper">
        <div className="project-image-wrapper">
          <img
            src={rrecords}
            alt="Ricky's Records"
            className="project-image"
          />
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            Ricky&apos;s Records
          </div>
          <div className="project-bio">
            Ricky’s Records is a PostgreSQL and Django REST Framework full stack application. Browse releases, listen to tracks across a range of genres and build up your own collection.
          </div>
          <div className="project-links">
            <a
              href="https://rickys-records.herokuapp.com/"
              target="_blank" rel="noreferrer">
              <ExternalLink size={32} color={'white'}/></a>
            <a
              href="https://github.com/rickyc000/sei-project-4"
              target="_blank" rel="noreferrer"><GitHubIcon size={32} color={'white'}/></a>
          </div>
        </div>

      </div>

      <div className="tetris-wrapper project-wrapper">

        <div className="project-image-wrapper">
          <img
            src={tetris}
            alt="Tetris"
            className="project-image"
          />
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            Tetris
          </div>
          <div className="project-bio">
            A vanilla JavaScript remake of the classic arcade game. Built as a solo project.
          </div>
          <div className="project-links">
            <a
              href="https://rickyc000.github.io/sei-project-1"
              target="_blank" rel="noreferrer">
              <ExternalLink size={32} color={'white'}/>
            </a>
            <a
              href="https://github.com/rickyc000/sei-project-1"
              target="_blank" rel="noreferrer">
              <GitHubIcon size={32} color={'white'}/>
            </a>
          </div>
        </div>
      </div>

      <div className="cityspace-wrapper project-wrapper">
        <div className="project-image-wrapper">
          <img
            src={cityspace}
            alt="CitySpace"
            className="project-image"
          />
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            CitySpace
          </div>
          <div className="project-bio">
            A full-stack MERN app built as part of a group project. Discover and share your favourite spots in London.
          </div>
          <div className="project-links">
            <a href="https://cityspace-app.herokuapp.com" target="_blank" rel="noreferrer"><ExternalLink size={32} color={'white'}/></a>
            <a href="https://github.com/rickyc000/sei-project-3" target="_blank" rel="noreferrer"><GitHubIcon size={32} color={'white'}/></a>
          </div>
        </div>
      </div>

      <div className="gorillazapp-wrapper project-wrapper">

        <div className="project-image-wrapper">
          <img
            src={gorillazapp}
            alt="GorillazApp"
            className="project-image"
          />
        </div>
        <div className="project-bio-wrapper">
          <div className="project-title">
            GorillazApp
          </div>
          <div className="project-bio">
            Shuffle through and listen to tracks from the Gorillaz back catalogue. Built with React and the iTunes Search API as a pair project.
          </div>
          <div className="project-links">
            <a href="https://gorillazapp.netlify.app" target="_blank" rel="noreferrer"><ExternalLink size={32} color={'white'}/></a>
            <a href="https://github.com/rickyc000/sei-project-2" target="_blank" rel="noreferrer"><GitHubIcon size={32} color={'white'}/></a>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Projects

