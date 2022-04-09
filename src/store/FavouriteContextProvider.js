import React, { createContext, useState } from 'react'
export const MyfavContext = createContext({
    favourites: {},
    totalfavourites: 0,
    isItemFavourite: (meetupid) => {},
    addToFavourites: (meetup) => { },
    removeFavourites : (meetupid) =>{}
    
})
function FavouriteContextProvider(props) {
  
    const [userFavorites, setUserFavourites] = useState([])
    const addToFavourites = (meetup) => {
        setUserFavourites((previousFavourites) => {
           return previousFavourites.concat(meetup);    
        })
    }
    const removeFavourites = (meetupid) => {
        setUserFavourites((previousFavourites) => {
            return previousFavourites.filter((meetup) => meetup.id !== meetupid);
        })  
       
        
    }
   
    const isItemFavourite = (meetupid) => {
        return userFavorites.some(meetup => meetup.id === meetupid)
        
    
      
    }
    const context = {
        favourites: userFavorites,
        totalfavourites:userFavorites.length,
        addToFavourites: addToFavourites,
        removeFavourites: removeFavourites,
        isItemFavourite:isItemFavourite
    }
  return (
      <MyfavContext.Provider value={context}>
          {props.children}
   </MyfavContext.Provider>
  )
}

export default FavouriteContextProvider
