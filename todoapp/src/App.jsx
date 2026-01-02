import { useState } from 'react';
import './App.css';
import CreateArea from './Components/CreateArea';
import ToDos from './Components/ToDos';

function App() {
  const [toDos, setToDos] = useState([]);

  function addItem(item) {
    setToDos((prevValue) => [...prevValue, item]);
  }

  function editItem() {
    console.log("Clicked Edit Item");
  }

  function deleteItem(id) {
    setToDos((prevValue) =>
      prevValue.filter((item, index) => index !== id)
    );
  }

  function editItem(id) {
    const newValue = prompt("Enter New Value",toDos[id])
    if(newValue === null || newValue.trim() === "") return;

    setToDos((prevValue) => 
      prevValue.map((item,index) => 
        index === id ? newValue : item
    
      ))

  }



  return (
    <>
      <div className="container">
        <h2 className="todo-title">To Do List</h2>
        <CreateArea onAdd={addItem} />
        {toDos.map((toDoItem, index) => (
          <ToDos
            toDo={toDoItem}
            key={index}
            id={index}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
