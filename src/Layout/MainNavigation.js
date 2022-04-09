import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom"
import { MyfavContext } from '../store/FavouriteContextProvider.js'


function MainNavigation() {
  const FavContext = useContext(MyfavContext);
  return (
    <header className={classes.header}>
    
      <div className={classes.logo}>Main Navigation</div>
      <nav className='mainnavigation-btns'>
        <ul className='nav-ul'>
        <li> <Link to="/allmeetups">All Meet Ups</Link></li>
        <li><Link to="/Myfavourites">My Favorites <span>({ FavContext.totalfavourites}) </span></Link></li>
        <li><Link to="/NewMeetUps">New Meet Up</Link></li>
         <li> <Link to="/MyTodos">My Todos</Link></li>
          </ul>

      </nav>
      
      </header>
  )
}

export default MainNavigation
