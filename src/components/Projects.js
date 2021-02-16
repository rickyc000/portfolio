
import React from 'react'

import rrecords from '../assets/projects/rrecords.png'
import tetris from '../assets/projects/tetris-gameplay.png'
import cityspace from '../assets/projects/cityspace-landing.png'
import gorillazapp from '../assets/projects/gorillazapp-track.png'



function Projects() {



  return (

    <div className="projects-content-wrapper">
      <div className="rickys-records-wrapper project-wrapper">
        <div className="project-title">
          Ricky&apos;s Records
        </div>
        <div className="project-image-wrapper">
          <img
            src={rrecords}
            alt="Ricky's Records"
            className="project-image"
          />
        </div>

      </div>

      <div className="tetris-wrapper project-wrapper">
        <div className="project-title">
          Tetris
        </div>
        <div className="project-image-wrapper">
          <img
            src={tetris}
            alt="Tetris"
            className="project-image"
          />
        </div>
      </div>

      <div className="cityspace-wrapper project-wrapper">
        <div className="project-title">
          CitySpace
        </div>
        <div className="project-image-wrapper">
          <img
            src={cityspace}
            alt="CitySpace"
            className="project-image"
          />
        </div>
      </div>

      <div className="gorillazapp-wrapper project-wrapper">
        <div className="project-title">
          GorillazApp
        </div>
        <div className="project-image-wrapper">
          <img
            src={gorillazapp}
            alt="GorillazApp"
            className="project-image"
          />
        </div>
      </div>
    </div>

  )
}


export default Projects

