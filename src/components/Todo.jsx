import React, { useContext } from 'react'
import { TodoContext } from '../contexts/Todocontext'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';

function Todo() {
    const {todolist} = useContext(TodoContext);
  return (
    <div>
        <TodoInput />
        {todolist.map((item,index)=>{
            return <TodoItem item={item} key={item.id} index={index}/>
        })}
    </div>
  )
}

export default Todo