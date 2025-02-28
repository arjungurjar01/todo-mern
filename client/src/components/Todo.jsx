import { TodoContext } from "@/context/todoContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function Todo() {
  const {todos , setTodos} = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addToDoHandler = async () => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/todo/create",
            {title,description},
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials:true
            }
          );
          console.log(response);
          if(response.data.success){
            toast.success(response.data.message);
            setTodos([...todos,response.data.todo]);
            setTitle("");
            setDescription("");
          }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  };
  

  


  return (
    <div className="flex flex-col w-5xl  gap-4 mx-10 mt-10 ">
      <div className="items-center flex flex-col gap-4">
        <input
        value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-[50%] h-10 rounded-md py-2 px-4 text-md "
          type="text"
          placeholder="todo"
        />
        <textarea
        value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-[50%] border rounded-md py-2 px-4"
          placeholder="write description..."
        />
      </div>

      <div className="flex gap-4 itmes-end justify-end mr-49 pr-15">
        <button onClick={addToDoHandler} className="w-20">
          Add
        </button>
        
      </div>
    </div>
  );
}

export default Todo;
