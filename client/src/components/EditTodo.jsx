import { TodoContext } from "@/context/todoContext";
import React, { useContext, useState } from "react";



function EditTodo() {

const {setUpdatedDescription,setUpdatedTitle,updatedTitle ,updatedDescription} = useContext(TodoContext);

  return (
    <div className="flex gap-2 items-center">
      <input
        label="Title"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        className="border w-[50%] h-10 rounded-md py-2 px-4 text-md "
          type="text"
          placeholder="todo"
      />
      <textarea
        label="Description"
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.target.value)}
        className="border w-[50%] h-10 rounded-md py-2 px-4 text-md "
          type="text"
          placeholder="todo"
      />
    </div>
  );
}

export default EditTodo;
