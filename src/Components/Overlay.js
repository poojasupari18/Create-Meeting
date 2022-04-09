import React from 'react'

function Overlay(props) {

    const {closeOverlayHandler , onConfirmDelete} = props

    const onCancel = () => {
        closeOverlayHandler()
        
    }
    const onConfirm = () => {
        onConfirmDelete()
    }
  return (
    <div className='modal'>
          <p> Are you sure ?</p>
          <button onClick={onCancel} className='btn btn--alt'>Cancel</button>
          <button onClick={onConfirm}className='btn'>Confirm</button>
    </div>
  )
}

export default Overlay
