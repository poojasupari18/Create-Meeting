import React from 'react'
import classes from "./NewMeetupForm.module.css"
import {useRef} from "react"
function NewMeetUpForm(props) {
    const MeetUpTitle = useRef();
    const MeetUpImage = useRef();
    const MeetUpAddress = useRef();
    const MeetUpDesc = useRef();

    const submitHandler = (e) => {
        e.preventDefault()
        const enteredTitle = MeetUpTitle.current.value
        const enteredImage = MeetUpImage.current.value
        const enteredAddress = MeetUpAddress.current.value
        const enteredDescription = MeetUpDesc.current.value
        const meetupdata = {
            Title: enteredTitle,
            Image: enteredImage,
            Address: enteredAddress,
            Description : enteredDescription
        }
        props.onAddMeetUp(meetupdata);
        console.log(meetupdata)
    }
    return (
      <div className='Newcard'>
      <form className={classes.form} onSubmit={(e)=>submitHandler(e)}>
          <div className={classes.control}>
              <label htmlFor='title'>
                  Meet Up Title
              </label>
                    <input type="text" id='title' required ref={MeetUpTitle}/>

          </div>
          <div className={classes.control}>
              <label htmlFor='image'>
                  Meet Up Image
              </label>
                    <input type="url" id='image' required ref={MeetUpImage}/>

          </div>
          <div className={classes.control}>
              <label htmlFor='address'>
                  Meet Up Address
              </label>
              <input type = "text" id='address'  ref={MeetUpAddress} />

          </div>
          <div className={classes.control}>
              <label htmlFor='descr'>
                  Meet Up Description
              </label>
              <textarea type = "text" id='descr'  ref={MeetUpDesc} />

          </div>
          <div className={classes.actions}>
              <button className='btn'> Add Meet Up</button>

          </div>
          
            </form>
            </div>
  )
}

export default NewMeetUpForm
