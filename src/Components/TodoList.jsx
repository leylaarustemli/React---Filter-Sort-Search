import React from 'react'
import "./TodoList.css"
const TodoList = ({todos,deleteTodos}) => {
  return (
    <div className='todolist'>
    <div className="todo">
    <ul>
           {todos.map((item,index)=>(
        <li> <input type="checkbox" />{item.title} <i onClick={()=>deleteTodos(item.id)} className ="fa-solid fa-xmark"></i></li>
           ))}
        </ul>
    </div>
<div className="footer">
    <div className="left-footer">
        <p>5 items left</p>
    </div>
    <div className="center-footer">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
    </div>
    <div className="right-footer">
        <p>Clear Completed</p>
    </div>
</div>

    </div>
  )
}

export default TodoList