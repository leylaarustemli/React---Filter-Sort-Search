
import { useEffect, useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
let id=0
function App() {
  const [inputValue,setInputValue]=useState("")
const[todos,setTodos]=useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const add = () => {
    
    setTodos([...todos, { id:id, title: inputValue }]);
    setInputValue("")
    id++
  };

  const deleteTodos=(id)=>{
    setTodos(todos.filter((task)=>task.id !==id)) 
  }
  return (
<div className='input'>
    <h1>TODO</h1>
    <div className="input-button">
    <i onClick={add} className="fa-solid fa-plus"></i>
    <input onChange={(e)=>{setInputValue(e.target.value)}} className='app-inp' placeholder='Add a new todo ...' type="text" />
    </div>
 
     <TodoList todos={todos} deleteTodos={deleteTodos}/>
    </div>
  )
}
export default App
