import axios from 'axios';
import React, { useContext, useReducer } from 'react'
import { TodoContext } from '../contexts/Todocontext';

const reducer = (state,{type,payload})=> {
    switch(type){
        case "TOGGOLE" : 
          return payload 
        default : 
          return state
    }
}

function TodoItem({item,index}) {
    const {update,setUpdate} = useContext(TodoContext);
    const [toggole,dispatch] = useReducer(reducer,true);
    const handledelete = (id)=>{
        axios.delete(`http://localhost:8080/todos/${id}`)
        .then(()=> setUpdate(!update))
        // setUpdate(!update);
        console.log(update)
    }
  return (
    <div>
        <p>{index+1}. {item.payload.name}
         <span><button onClick={()=> handledelete(item.id)}>Delete</button></span>
         <span><button style={{
             margin : "5px"
         }} onClick={()=> dispatch({type : "TOGGOLE", payload : !toggole})}>{toggole ? item.payload.status : "Completed"}</button></span>
         </p>
    </div>
  )
}

export default TodoItem