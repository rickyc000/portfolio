
import React from 'react'

// import ochre from '../assets/experience/ochre-logo.jpg'
// import bleep from '../assets/experience/bleep-logo.png'
// import generalAssembly from '../assets/experience/general-assembly-logo.jpg'

import ochre from '../assets/experience/ochre.png'
import bleep from '../assets/experience/bleep.png'
import generalAssembly from '../assets/experience/ga.png'
import surreyUni from '../assets/experience/university-of-surrey-2.png'
import hiya from '../assets/experience/hiya.png'
import artlogic from '../assets/experience/artlogic.png'
import rickycato from '../assets/experience/RickyCato_Athelas_font-min.png'

function Experience() {



  return (
    <div className="experience-content-wrapper">
      {/* <div className="about-wrapper">
        <div className="about-text">
          In my previous role working for a music-focused e-commerce platform, I was able to combine my love of music with a unique opportunity to help artists connect with their fans. Working closely with talented developers on a daily basis sparked my interest in software engineering which led me to studying full-time at General Assembly.{'\n'}
          {'\n'}
          I thrive when collaborating on forward-thinking and innovative projects with a passionate team of people and look forward to my career as a developer.
        </div>
      </div> */}

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <a href="https://artlogic.net/" target="_blank" rel="noopener noreferrer">
            <img
              src={rickycato}
              alt="Ricky Cato"
              className="experience-image"
            />
          </a>
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Freelance Web Developer {'\n'}
          </h5>
          <div className="experience-dates">
            Feb 2023 - Present
          </div>
          <div className="experience-info">
            Design and frontend development project for a commercial client using Figma to prototype and React to build.{'\n'}
            {'\n'}
            Assisting client with third-party marketing tools such as Mailchimp.
            <div className='tags-wrapper'>
              <div className='experience-tag'>React</div>
              <div className='experience-tag'>Figma</div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <a href="https://artlogic.net/" target="_blank" rel="noopener noreferrer">
            <img
              src={artlogic}
              alt="Artlogic"
              className="experience-image"
            />
          </a>
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Web Developer - Client Support {'\n'}
          </h5>
          <div className="experience-dates">
            May 2021 - April 2022
          </div>
          <div className="experience-info">
            Implementing practical, technical solutions for a range of gallery and artist websites built by Artlogic. Diagnosing incoming queries from the client liaison team in relation to bespoke and template website products, and the Artlogic CMS platform.{'\n'}
            {'\n'}
            Stack includes Python using Mako templating, MySQL and jQuery.{'\n'}
            {'\n'}
            Selected clients:
          </div>
          <ul className="clients-list">
            <li>Simon Lee Gallery</li>
            <li>Alan Klinkoff Gallery</li>
            <li>Royal Scottish Academy</li>
            <li>Sadie Coles</li>
            <li>Hales Gallery</li>
            <li>Marian Goodman Gallery</li>
            <li>Michael Hoppen Gallery</li>
          </ul>
          <div className='tags-wrapper'>
            <div className='experience-tag'>Python</div>
            <div className='experience-tag'>MySQL</div>
            <div className='experience-tag'>JavaScript</div>
            <div className='experience-tag'>jQuery</div>
            <div className='experience-tag'>Pylons</div>
          </div>
        </div>
      </div>

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
            Software Engineering Immersive Course {'\n'}
          </h5>
          <div className="experience-dates">
            Nov 2020 - Feb 2021
          </div>
          <div className="experience-info">
            12 week full-time course, learning to build full stack applications with key programming languages and frameworks. {'\n'}
            {'\n'}
            Participated in lessons, pair/group coding tasks and daily stand-up, and completed daily assessed assignments. {'\n'}
            {'\n'}
            Produced 4 projects, both independently and as part of a group, developing project management skills in an agile environment.
          </div>
          <div className='tags-wrapper'>
            <div className='experience-tag'>JavaScript</div>
            <div className='experience-tag'>React</div>
            <div className='experience-tag'>Python</div>
            <div className='experience-tag'>MongoDB</div>
            <div className='experience-tag'>Django</div>
            <div className='experience-tag'>PostgreSQL</div>
            <div className='experience-tag'>CSS</div>
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">

          <img
            src={hiya}
            alt="Hiya"
            className="experience-image hiya-logo"
          />
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            Founder
          </h5>
          <div className="experience-dates">
            Aug 2018 - Oct 2019
          </div>
          <div className="experience-info">
            London-based collective and event-series showcasing emerging DJs playing forward-thinking music across a range of genres. Events have featured artists Stem, Simkin, Truska and Taslo Valve amongst others.{'\n'}
            {'\n'}
            Overall control of programming, promotion and design, venue hire and artist bookings.
          </div>
          <div className='tags-wrapper'>
            <div className='experience-tag'>Adobe Photoshop</div>
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
            Client Services Manager
          </h5>
          <div className="experience-dates">
            Apr 2017 - Oct 2020
          </div>
          <div className="experience-info">
            Store management across a range of direct to consumer stores for artists, labels and distributors. Providing client support in site and product creation and stock management across multiple warehouses worldwide.{'\n'}
            {'\n'}
            Worked closely with development team to implement new tools and features across warehousing and store management services.{'\n'}
            {'\n'}
            Selected clients:
          </div>
          <ul className="clients-list">
            <li>Warp Records</li>
            <li>Boiler Room</li>
            <li>[PIAS]</li>
            <li>Mixcloud</li>
            <li>SA Recordings</li>
            <li>NTS Radio</li>
            <li>!K7 Records</li>
            <li>LuckyMe</li>
            <li>Bleep</li>
            <li>Anjunabeats</li>
            <li>Resident Advisor</li>
            <li>Loma Vista Recordings</li>
            <li>Because Music</li>
            <li>Partisan Records</li>
          </ul>
          <div className='tags-wrapper'>
            <div className='experience-tag'>Excel</div>
            <div className='experience-tag'>Mailchimp</div>
            <div className='experience-tag'>MySQL</div>
            <div className='experience-tag'>CSS</div>
          </div>
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
            Content Assistant
          </h5>
          <div className="experience-dates">
            Oct 2016 - Apr 2017
          </div>
          <div className="experience-info">
            Digital asset management, assisting in the sale of physical and digital products on Bleep.com. Produced and edited visual and audio marketing content and handled customer support.
          </div>
          <div className='tags-wrapper'>
            <div className='experience-tag'>Excel</div>
            <div className='experience-tag'>Adobe Photoshop</div>
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <div className="experience-image-wrapper">
          <img
            src={surreyUni}
            alt="University of Surrey"
            className="experience-image surrey-uni-logo"
          />
        </div>
        <div className="experience-content-wrapper">
          <h5 className="experience-role">
            BMus - Creative Music Technology
          </h5>
          <div className="experience-dates">
            Sep 2013 - Jun 2016
          </div>
          <div className="experience-info">
            Modules included visual programming languages such as Max/MSP and Reaktor, as well as Sound Design, Synthesis & Sampling and Composition Technologies.
          </div>
          <div className='tags-wrapper'>
            <div className='experience-tag'>Logic Pro X</div>
            <div className='experience-tag'>Max/MSP</div>
            <div className='experience-tag'>Reaktor</div>
          </div>
        </div>
      </div>





    </div>

  )
}


export default Experience

