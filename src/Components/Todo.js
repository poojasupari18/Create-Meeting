import React , {useState} from 'react'
import Backdrop from './Backdrop';
import Overlay from './Overlay';


function Todo(props) {
    const { text } = props;
    const [overlayIsOpen, setoverlayIsOpen] = useState(false)

    const deleteHandler = () => {
        setoverlayIsOpen(true)

    }
    const closeOverlayHandler = ()=>{
        setoverlayIsOpen(false)
    }
    const onConfirmDelete = () => {
        setoverlayIsOpen(false)
    }
  return (
    <div>
      <div className='card'>
       
        <h2>{text} </h2>

        <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
          </div>
          {overlayIsOpen && <Overlay closeOverlayHandler={closeOverlayHandler} onConfirmDelete={onConfirmDelete}/>}
          {overlayIsOpen && <Backdrop closeOverlayHandler={ closeOverlayHandler}/>}
    </div>
  )
}

export default Todo
