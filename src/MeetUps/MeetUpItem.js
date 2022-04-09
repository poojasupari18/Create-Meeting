import React, { useContext } from 'react'
import classes from "./MeetupItem.module.css"
import Card from '../Ui/Card'
import {MyfavContext} from "../store/FavouriteContextProvider.js"
function MeetUpItem(props) {
  const FavContext = useContext(MyfavContext);
 const {addToFavourites  , removeFavourites , isItemFavourite  } =  FavContext
 
  const isitemfavourite = isItemFavourite(props.id);

  const toggleStatusHandler = () => {

    if (isitemfavourite) {
      removeFavourites(props.id)
    
    }
    else {
    
      addToFavourites({
        id: props.id,
        Title: props.title,
        Address: props.address,
        Description: props.description,
        Image:props.image
      })
    }
    
    
  }

  return (
 
    <div className={classes.item} >
     <Card>
      <div className={classes.image}>
     <img  src={props.image} alt={props.title}/>
        </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button  onClick={toggleStatusHandler}>
            {isitemfavourite? 'Remove Favourites' : 'Add Favourites'}

          </button>
        </div>
        </Card>
      </div>
      
    
  )
}

export default MeetUpItem
