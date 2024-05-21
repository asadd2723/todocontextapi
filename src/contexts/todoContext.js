import { createContext,useContext } from "react";

export const todoContext = createContext({
  todo:[
    {
      id:1,
      todo:"todo msg",
      completed: false,
    }
  ],
})

export const todoProvider = todoContext.Provider

export const  useTodo = ()=>{
  return useContext(todoContext)
}