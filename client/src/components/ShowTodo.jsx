import { TodoContext } from "@/context/TodoContext";
import React, { useContext} from "react";
import EditTodo from "./EditTodo";

function ShowTodo() {
  
  const { todos, setTodos, editToDoHandler, deleteToDoHandler ,editMode,editId,setEditMode,setEditId,setUpdatedTitle,setUpdatedDescription } =
    useContext(TodoContext);



  if (!Array.isArray(todos)) {
    return null;
}

  // console.log(todos, "todos");
  return (
    <div className="flex flex-col w-5xl  gap-4 mx-10 mt-10 justify-center items-center ">
      {todos ? (
        todos.map((todo, index) => (
          <div
            key={index}
            className="w-[70%] items-center justify-center flex gap-1 "
          >
            {editMode && editId === todo._id ? (
              <>
               <EditTodo/>
              </>
            ) : (
              <>
                {" "}
                <div className="w-[50%] h-auto flex flex-col px-8 py-2 bg-[#171717]  hover:bg-[#191a1d]  rounded-md">
                  <p className="mb-1 text-white">{todo.title}</p>
                  <p className="text-gray-500">{todo.description}</p>
                </div>
              </>
            )}

            <div className="flex  gap-1 justify-center items-center ">
             
             {/* check editmode is true and edit id is same as todo _id  */}
              {editMode && editId === todo._id ? (
                <button
                  onClick={() => editToDoHandler(todo._id)}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditMode(true);
                    setEditId(todo._id);
                    setUpdatedTitle(todo.title);
                    setUpdatedDescription(todo.description);
                  }}
                  
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteToDoHandler(todo._id)}
                className="w-20 text-[6px] p-1 "
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ShowTodo;
