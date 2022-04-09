import React from 'react'
import classes from "./MeetupItem.module.css"
import MeetUpItem from './MeetUpItem'

function MeetUpList(props) {
  return (
    <div className='flex'>
     
    <ul className={classes.list}>
      {props.meetups.map((meetup) =>
        
        <MeetUpItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.Image}
          title={meetup.Title}
          address={meetup.Address}
          description={meetup.Description} />)
      }
      
        </ul>
      
      </div>
  )
}

export default MeetUpList
