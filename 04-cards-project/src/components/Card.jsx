import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className="card">

        <div>
          <div className="top">
            <img src={props.brandLogo}  />
            <button>Save <Bookmark size={15} /> </button>
          </div>
          <div className="center">
            <h4>{props.company}<span>{props.datePosted}</span></h4>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>

      </div>
    </div>
  )
}

export default Card
