
// import { useEffect, useState } from 'react'
// import { TodoProvider } from './TodoContext.js'
// import './App.css'
// import TodoForm from './TodoForm.jsx'
// import TodoItem from './TodoItem.jsx'

// function App() {

//   const [todos, setTodos] = useState([])


//     // *****************************************************************************

//   const addTodo=(todo)=>{
//     setTodos((prev)=>[{id:Date.now(), ...todos},...prev]) //...prev me previous value delete nhi hogi aur sath me new value add ho jayegi
//   }

//     // *****************************************************************************


//   const updatedTodo=(id,todo)=>{
//     setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
//   }


//     // *****************************************************************************


//   const deleteTodo=(id)=>{
//     setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
//   } 



//   // *****************************************************************************
//   const toggleCompleted =(id)=>{
//     setTodos((prev)=>
//       prev.map((prevTodo)=>
//         prevTodo.id===id?{...prevTodo,
//           completed:!prevTodo.completed}:prevTodo))
//   }




//   // *************************************************************************

//   // local storage functionality we want to need

//   useEffect(() => {  // JSON.parse ye direct javascript deta hai
//   const todos=JSON.parse(localStorage.getItem("todos"))
//   if(todos && todos.length>0){
//     setTodos(todos)
//   }
//   }, [])

//   useEffect(()=>{
//     localStorage.setItem("todos",JSON.stringify(todos))
//   },[todos])
  



//   return (
//     <TodoProvider value={{todos, addTodo, updatedTodo,deleteTodo, toggleCompleted}}>
//     <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                         <TodoForm/>
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         {todos.map((todo)=>(
//                          <div key={todo.id}
//                          className='w-full'>
//                          <TodoItem todo={todo}/>
//                          </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
     
//     </TodoProvider>
//   )
// }

// export default App



import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <>
 
        <div className="App">
          <h1 className="">To-Do List</h1>
          <div>
            <input
   
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task"
            />
            <button
   
             onClick={addItem}>Add</button>
          </div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item} <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
    
    </>
  );
}

export default App;