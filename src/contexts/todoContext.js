import { createContext,useContext } from "react";

//createContext
export const TodoContext = createContext({
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
export const TodoProvider = TodoContext.Provider

//custom hooks 
export const useTodo = ()=>{
  return useContext(TodoContext)
}