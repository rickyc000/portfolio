
import React from 'react'

import ochre from '../assets/experience/ochre-logo.jpg'
import bleep from '../assets/experience/bleep-logo.png'
import generalAssembly from '../assets/experience/general-assembly-logo.jpg'
// import tetris from '../assets/tetris-gameplay.png'
// import cityspace from '../assets/cityspace-landing.png'
// import gorillazapp from '../assets/gorillazapp-track.png'



function Experience() {



  return (
    <div className="experience-content-wrapper">

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <img
            src={generalAssembly}
            alt="General Assembly"
            className="project-image"
          />
        </div>
        <div className="experience-content-wrapper">
          <div className="experience-title">
            General Assembly - Software Engineering Immersive Course (20-21)
          </div>
          <div className="experience-info">
            Overseeing release campaigns across a range of stores including Warp Records, [PIAS], Resident Advisor, NTS Radio, !K7 Records, Anjunabeats, LuckyMe, Because Music, Partisan Records and Loma Vista Recordings.
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <img
            src={ochre}
            alt="Ochre"
            className="project-image"
          />
        </div>
        <div className="experience-content-wrapper">
          <div className="experience-title">
            Ochre - Client Services Manager (17-20)
          </div>
          <div className="experience-info">
            Overseeing release campaigns across a range of stores including Warp Records, [PIAS], Resident Advisor, NTS Radio, !K7 Records, Anjunabeats, LuckyMe, Because Music, Partisan Records and Loma Vista Recordings.
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <img
            src={bleep}
            alt="Bleep"
            className="project-image"
          />
        </div>
        <div className="experience-content-wrapper">
          <div className="experience-title">
            Bleep - Content Assistant (16-17)
          </div>
          <div className="experience-info">
            Listing digital and physical music releases and products for sale, production of marketing content and editing visual/audio marketing assets. 
          </div>
        </div>
      </div>





    </div>

  )
}


export default Experience

