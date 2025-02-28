import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function NavBar() {
      const navigate = useNavigate();

    const onLogoutHandler = async()=>{
        try {
            const res = await axios.get('http://localhost:5000/api/user/logout');
            console.log(res) ;
            if(res.data.success){
                toast.success(res.data.message);
                // window.location.href = '/login';
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
  return (
    <div className='flex justify-between gap-10 items-center container  p-3'>
     <h1 className='ml-5 text-2xl'>Todo App</h1>  
      <h1>Hello </h1>
      <p onClick={onLogoutHandler} className='mr-10 text-red-500 cursor-pointer '>Logout</p>
    </div>
  )
}

export default NavBar