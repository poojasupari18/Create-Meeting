import React, { useState } from 'react'
import NewMeetUpForm from '../MeetUps/NewMeetUpForm'


const addMeetUpHandler = (meetupdata) => {
  fetch('https://fir-crudapp-53cb2.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupdata),
     headers: {
        'Content-Type': 'application/json'
      }
  })
}



    

function NewMeetUp() {

  return (
    <div>
      <h1>New Meet Up </h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </div>
  )
}

export default NewMeetUp
