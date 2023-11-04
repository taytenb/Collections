import React from 'react'

import "../Components.css"

const Point = (props) => {
  return (
    <div className="points">
          <div className="player-image">
            <img img src={props.Image}/>
          </div>
          <div><h2>{props.Player}</h2></div>
          <div><h3>PPG: {props.PPG}</h3></div>
    </div>
  )
}

export default Point