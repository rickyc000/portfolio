import React from 'react'

import aug18 from '../assets/events/hiya-august-2018.png'
import jan19 from '../assets/events/hiya-january-2019-comp.png'
import may19 from '../assets/events/hiya-may-2019.png'
import oct19 from '../assets/events/hiya-october-2019-comp.png'


function Events() {

  return (
    <div className="event-content-wrapper">

      <div className="event-image-wrapper">
        <img
          src={oct19}
          alt="Hiya October 2019"
          className="event-image"
        />
      </div>

      <div className="event-image-wrapper hiya-may-19">
        <img
          src={may19}
          alt="Hiya May 2019"
          className="event-image"
        />
      </div>

      <div className="event-image-wrapper">
        <img
          src={aug18}
          alt="Hiya August 2018"
          className="event-image"
        />
      </div>

      <div className="event-image-wrapper">
        <img
          src={jan19}
          alt="Hiya January 2019"
          className="event-image"
        />
      </div>

    </div>
  )
}


export default Events

