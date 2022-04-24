
import React from 'react'

const Selection = (props) => {
  return (
      <div className='fix-box' style={props.nextBackground} onClick={props.applyColor}>
          <h2 className='subheading'>Selection</h2>
      </div>
  )
}

export default Selection