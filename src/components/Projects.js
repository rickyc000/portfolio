
import React from 'react'

import rrecords from '../assets/rrecords.png'
import tetris from '../assets/tetris-gameplay.png'
import cityspace from '../assets/cityspace-landing.png'
import gorillazapp from '../assets/gorillazapp-track.png'



function Projects() {



  return (

    <div className="projects-content-wrapper">
      <div className="rickys-records-wrapper">
        <div className="project-title">
          Ricky&apos;s Records
        </div>
        <div className="project-image-wrapper">
          <img src={rrecords} alt="Ricky's Records" />
        </div>

      </div>

      <div className="tetris-wrapper">
        <div className="project-title">
          Tetris
        </div>
        <div className="project-image-wrapper">
          <img src={tetris} alt="Tetris" />
        </div>
      </div>

      <div className="cityspace-wrapper">
        <div className="project-title">
          CitySpace
        </div>
        <div className="project-image-wrapper">
          <img src={cityspace} alt="CitySpace" />
        </div>
      </div>

      <div className="gorillazapp-wrapper">
        <div className="project-title">
          GorillazApp
        </div>
        <div className="project-image-wrapper">
          <img src={gorillazapp} alt="GorillazApp" />
        </div>
      </div>
    </div>

  )
}


export default Projects

