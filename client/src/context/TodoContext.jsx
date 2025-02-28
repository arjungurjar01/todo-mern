import axios from "axios";
import {  createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState(''); 
  const [fullName,setFullName] = useState('');

  
  // fetch all todos from server
  const fetchTodo = async () => {
    try {
        const response = await axios.get(
            "http://localhost:5000/api/todo/create",
            
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials:true
            }
          );
          // console.log(response);
          if(response.data.success){
            toast.success(response.data.message);
            setTodos(response.data.todos);
          }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  };

  //edit
const editToDoHandler = async (_id) =>{
        try {
            const response = await axios.put(
                `http://localhost:5000/api/todo/create/${_id}`,
                {title:updatedTitle,description:updatedDescription},
                {
                    withCredentials: true
                },
                
              );
              // console.log(response);
              if(response.data.success){
                toast.success(response.data.message)
                console.log("Updated data:", response.data);
                const updatedTodos = response.data.todo;
                // console.log("Updated todos:", updatedTodos);
                setTodos(updatedTodos);
                setEditMode(false);
                setEditId(null);
                fetchTodo();
              }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
      };

  
//delete todo
const deleteToDoHandler = async (todoId) =>{
    try {
        const response = await axios.delete(
            `http://localhost:5000/api/todo/create/${todoId}`,
           
            {
              withCredentials: true
            }
          );
          // console.log(response,'delete');
          if(response.data.success){
            toast.success(response.data.message)
            fetchTodo();
          }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to delete todo");
    }
  };  

      useEffect(()=>{
         fetchTodo();
      },[]);

    

     
      

  return (
    <TodoContext.Provider value={{ todos, setTodos ,editToDoHandler  , deleteToDoHandler,fetchTodo ,editMode,editId ,setEditMode,setEditId,setUpdatedDescription,setUpdatedTitle }}>
     {props.children}
    </TodoContext.Provider>
  );
};


export default TodoContextProvider ;

