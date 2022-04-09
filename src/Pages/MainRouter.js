import React from 'react'
import {Routes , Route , BrowserRouter as Router } from "react-router-dom"
import MainNavigation from '../Layout/MainNavigation'
import AllMeetUps from './AllMeetUps'
import Myfavourites from './Myfavourites'
import NewMeetUp from './NewMeetUp'
import Todo from '../Components/Todo'
import Todocall from '../Components/Todocall'
function MainRouter() {
  return (
    <div>
      <Router>
       <Routes>
             <Route  path='/'  element = {<MainNavigation/>}/>
              <Route   path='/allmeetups' element={<AllMeetUps/>} />
            <Route  exact path='/Myfavourites' element={<Myfavourites/>}/> 
          <Route  exact path='/NewMeetUps' element={<NewMeetUp />} />
          <Route   exact path='/MyTodos' element={<Todocall/>}/> 
          </Routes>
        </Router>
       
 
    </div>
  )
}

export default MainRouter
