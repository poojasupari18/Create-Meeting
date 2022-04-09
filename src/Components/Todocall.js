import React from 'react'
import Todo from './Todo'

function Todocall() {
  return (
      <div>
          <h1>My Todos</h1>
       <Todo text = 'React'/>
      <Todo  text = 'Master React'/>
      <Todo text='Explore full React' />
    </div>
  )
}

export default Todocall
