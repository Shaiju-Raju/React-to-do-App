import { useState } from 'react'
import './App.css'
import CreateArea from './Components/CreateArea'

function App() {


  const [toDos, setToDos] = useState([])

  function addItem(item) {
    setToDos((prevValue) => (
      [...prevValue, item]
    ))

  }



  function editItem () {
    console.log("Clicked Edit Item")
  }

  function deleteItem (id) {
    setToDos(prevValue =>
      prevValue.filter((item, index) => index !== id)
    );

  }




  return (
    <>
      <div className="container">
       <h2 className="todo-title" >To Do List</h2>
        <CreateArea onAdd={addItem} />

         <ul className="todo-items-list" id="todo-items-list">
          {toDos.map((toDoItem, index) => (
           <li key={index}>
              <span className="item-text">{toDoItem}</span>
              <span className="item-actions">
                <i onClick={editItem} className="fas fa-edit"></i>
                <i onClick={() => {
                  deleteItem(index)
                }} className="fas fa-trash"></i>
              </span>
          </li>

          ))}
        </ul>

    </div>
    </>
  )
}

export default App
