import Todo from '../models/todo.js' ;

const createTodo = async(req,res)=>{
    try {
        const {title,description} = req.body ;

        if(!title && !description){
        return res.status(400).json({
            success:false,
            message:'Please provide all fields'
        })
    }

    const todo = new Todo({title,description}) ; 
    todo.save() ;
    
    return res.json({
        success:true,
        message:'Todo Created!',
        todo
    })

    } catch (error) {
        console.log(error);
    }

}

//get or read todo
const getAllTodos = async(req,res)=>{
          try {
            
            const todos = await Todo.find() ;
            console.log(todos);
            
            return res.status(200).json({
                success:true,
                message:'Todo get Successfully!',
                todos   
            })

          } catch (error) {
            console.log(error);
          }
}

//update todo
const updateTodo = async(req,res)=>{
    try {
        const todoId = req.params.todoId ;
        const {title,description} = req.body ;
        // console.log(title,description);

        if(!title || !description){
            return res.status(400).json({
                success:false,
                message:'Please provide all fields'
            })
        }

        const todo = await Todo.findByIdAndUpdate(todoId,{title,description},{new:true});
        await todo.save();

        return res.status(200).json({
            success:true,
            message:'Todo Updated Successfully!',
            todo
        })
    } catch (error) {
        console.log(error);
    }
}


//delete todo
const deleteTodo = async(req,res)=>{
    try {
        const todoId = req.params.todoId ;
     const deletedTodo =  await Todo.findByIdAndDelete(todoId);
       
       if (!deletedTodo) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        })
      }

        return res.status(200).json({
            success:true,
            message:"Todo Deleted "
        })
    } catch (error) {
        console.log(error)
    }
}

export {createTodo,getAllTodos,updateTodo,deleteTodo} ;