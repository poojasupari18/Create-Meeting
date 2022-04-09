import React from 'react'

function Backdrop(props) {
    const {closeOverlayHandler} =  props
  return (
    <div className='backdrop' onClick={closeOverlayHandler} />
    
  )
}

export default Backdrop
