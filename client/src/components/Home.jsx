import React from 'react'
import NavBar from './NavBar'
import Todo from './Todo'
import ShowTodo from './ShowTodo'

function Home() {
  return (
    <div className='flex flex-col  items-center'>
    <NavBar />
    <Todo/>   
    <ShowTodo/> 
    </div>
  )
}

export default Home