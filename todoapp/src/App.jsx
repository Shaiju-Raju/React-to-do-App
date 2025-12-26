import { useState } from 'react'
import './App.css'

function App() {

  const [item, setItem] = useState("")
  const [toDos, setToDos] = useState([])

  function addItem() {
    setToDos((prevValue) => (
      [...prevValue, item]
    ))
    setItem("")
  }

  function handleChange (event) {
    const newValue = event.target.value
    setItem(newValue)
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
            <div className="todo-header">
                 <input 
                 onChange={handleChange}
                 value={item}
                 type="text"
                 placeholder="Enter To Do Item Here"
                 id="todo-input" />
                <button onClick={addItem} id="add-btn">Add Now</button>
             </div>

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
