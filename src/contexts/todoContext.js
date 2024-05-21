import { createContext,useContext } from "react";

//createContext
export const todoContext = createContext({
  todos:[
    {
      id:1,
      todoMsg: "Todo msg",
      completed:false
    }
  ],
  addTodo:(todoMsg)=>{},
  updatedTodo:(id,todoMsg)=>{},
  deleteTodo:(id)=>{},
  toggleComplete: (id)=>{}
})
//context provider
export const todoProvider = todoContext.Provider

//custom hooks 
export const useTodo = ()=>{
  return useContext(todoContext)
}