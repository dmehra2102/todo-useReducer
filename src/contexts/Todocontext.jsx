import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Step-1 => Create Context API
export const TodoContext = createContext();

// step-2=> Create Context Provider;
export const TodoProvider = ({children})=> {
    const [update,setUpdate] = useState(false);
    const [todolist,setTodolist] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:8080/todos")
      .then((res)=> setTodolist(res.data));
    }, [update])
    

    return <TodoContext.Provider value={{todolist,update,setUpdate}}>{children}</TodoContext.Provider>
}