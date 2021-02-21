
import React from 'react'

// import ochre from '../assets/experience/ochre-logo.jpg'
// import bleep from '../assets/experience/bleep-logo.png'
// import generalAssembly from '../assets/experience/general-assembly-logo.jpg'

import ochre from '../assets/experience/ochre.png'
import bleep from '../assets/experience/bleep.png'
import generalAssembly from '../assets/experience/ga.png'
import surreyUni from '../assets/experience/university-of-surrey-2.png'


function Experience() {



  return (
    <div className="experience-content-wrapper">

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <a href="https://generalassemb.ly" target="_blank" rel="noopener noreferrer">
            <img
              src={generalAssembly}
              alt="General Assembly"
              className="experience-image"
            />
          </a>
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Software Engineering Immersive Course (20-21)
          </h5>
          <div className="experience-info">
            12 week full-time course, learning to build full stack applications with key programming languages and frameworks. {'\n'}
            {'\n'}
            Participated in lessons, pair/group coding tasks and daily stand-up, and completed daily assessed assignments. {'\n'}
            {'\n'}
            Produced 4 projects, both independently and as part of a group, developing project management skills in an agile environment.
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">

          <img
            src={generalAssembly}
            alt="Hiya"
            className="experience-image"
          />
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Founder (18-Present)
          </h5>
          <div className="experience-info">
            London-based collective and event-series showcasing emerging DJs playing forward-thinking music across a range of genres.{'\n'}
            {'\n'}
            Overall control of progamming, promotion and design, venue hire and artist bookings.
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <a href="https://with-ochre.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={ochre}
              alt="Ochre"
              className="experience-image"
            />
          </a>
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Client Services Manager (17-20)
          </h5>
          <div className="experience-info">
            Store management across a range of direct to consumer stores for artists, labels and distributors. Providing client support in site and product creation and stock management across multiple warehouses worldwide.{'\n'}
            {'\n'}
            Worked closely with development team to implement new tools and features across warehousing and store management services.{'\n'}
            {'\n'}
            Clients:
          </div>
          <ul className="clients-list">
            <li>Warp Records</li>
            <li>[PIAS]</li>
            <li>Resident Advisor</li>
            <li>NTS Radio</li>
            <li>!K7 Records</li>
            <li>Anjunabeats</li>
            <li>Loma Vista Recordings</li>
            <li>LuckyMe</li>
            <li>Because Music</li>
            <li>Partisan Records</li>
          </ul>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <a href="https://bleep.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={bleep}
              alt="Bleep"
              className="experience-image"
            />
          </a>
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Content Assistant (16-17)
          </h5>
          <div className="experience-info">
            Digital asset management, assisting in the sale of physical and digital products on Bleep.com. Produced and edited visual and audio marketing content and handled customer support.
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <img
            src={surreyUni}
            alt="University of Surry"
            className="experience-image surrey-uni-logo"
          />
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            BMus - Creative Music Technology (13-16)
          </h5>
          <div className="experience-info">
            Modules included visual programming languages such as Max/MSP and Reaktor, as well as Sound Design, Synthesis & Sampling and Composition Technologies.
          </div>
        </div>
      </div>





    </div>

  )
}


export default Experience

