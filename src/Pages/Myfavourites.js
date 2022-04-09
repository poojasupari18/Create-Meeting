import React, { useContext } from 'react'
import MeetUpList from '../MeetUps/MeetUpList'
import {MyfavContext} from "../store/FavouriteContextProvider.js"
function Myfavourites() {
  const FavContext = useContext(MyfavContext);
  return (
    <div>
      <h1>My Favourites <span>({ FavContext.totalfavourites})</span></h1>
      { FavContext.favourites && <MeetUpList meetups={FavContext.favourites} />}
    </div>
  )
}

export default Myfavourites
