import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Todo from './components/Todo'
import { ToastContainer, toast } from 'react-toastify';
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import EditTodo from './components/EditTodo'


const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element: <Home/> ,
    },
    {
      path:'/login',
      element: <Login/> ,
    },
    {
      path:'/register',
      element: <SignUp/> ,
    },
    {
      path:'/edit',
      element: <EditTodo/> ,
    }
  ]
  )

function App() {

  return (
    <div className="container mx-auto flex flex-col  items-center">
       <ToastContainer />
       <RouterProvider router={appRouter}/>
       

    </div>
    
  )
}

export default App
