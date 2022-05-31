import axios from 'axios';
import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/Todocontext';

function TodoInput() {
    const {update,setUpdate} = useContext(TodoContext);
    const [todo,setTodo] = useState({
        name : "",
        status:"Not Completed",
        
    });
    const handlechange = (e)=> {
    
        setTodo({
            ...todo,
            name : e.target.value
        })
    }

    const handlesubmit = ()=>{
        const payload = todo;
        axios.post("http://localhost:8080/todos",{payload})
        .then(()=> setUpdate(!update))
        console.log(update);
    }
  return (
    <div className='todoinput'>
        <input type="text" placeholder='write Todo here ...' id='name' onChange={(e)=>handlechange(e)}/>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default TodoInput