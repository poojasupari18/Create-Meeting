import React , {useEffect, useState} from 'react'
import MeetUpList from '../MeetUps/MeetUpList';

function AllMeetUps() {
  const [isloading , setisloading] = useState(true)
  const [loadingData , setloadingData]  = useState([])
  const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

  useEffect(() => {
    setisloading(true)
    fetch('https://fir-crudapp-53cb2.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup)
        }
        setisloading(false)
        setloadingData(meetups)
        
    
      });
  } , [])

  
if (isloading) {
  return <p> loading</p>

  }
  
 

  return (
    <div className='AllMeetUps'>
      <h1>All Meet Ups</h1>
     <MeetUpList meetups = {loadingData} />
    </div>
  )
}

export default AllMeetUps
