import { useState,useEffect } from 'react';
import './App.css';
import CreateArea from './Components/CreateArea';
import ToDos from './Components/ToDos';


function App() {

  useEffect( () => {
    async function loadTodos() {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      setToDos(data);
    }
    loadTodos();
  },[])

  const [toDos, setToDos] = useState([]);

   async function addItem(item) {
    if(item.trim() === "") return;

    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({text: item})
    });

    const data = await res.json();
    setToDos(data);
  }

  function editItem() {
    console.log("Clicked Edit Item");
  }

 async function deleteItem(id) {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE"
  });

  const data = await res.json();
  setToDos(data)
    
  }

   async function editItem(id) {
    const newValue = prompt("Enter New Value")

    if(newValue === null || newValue.trim() === "") return;

    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({text: newValue})
    });

    const data = await res.json();
    setToDos(data);


  }



  return (
    <>
      <div className="container">
        <h2 className="todo-title">To Do List</h2>
        <CreateArea onAdd={addItem} />
        {toDos.map((toDoItem, index) => (
          <ToDos
            toDo={toDoItem.text}
            key={toDoItem.id}
            id={toDoItem.id}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
