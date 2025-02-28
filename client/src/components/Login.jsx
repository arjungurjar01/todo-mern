import { TodoContext } from "@/context/todoContext";
import axios from "axios";
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
    
  
  
  
    const onChangeHandler = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

   //login user
  const logInHandler = async () => {
    try {
        const res = await axios.post(
            "http://localhost:5000/api/user/login",
             user ,
            { headers: { "Content-Type": "application/json" } ,
          withCredentials:true
          }
          );
          console.log(res);
          if(res.data.success){
              toast.success(res.data.message);
              navigate('/');
          }
    } catch (error) {
        toast.error(error.message || 'Something went wrong!');
    }
  };
    
  return (
    <div className="flex flex-col gap-4 mt-40 border  rounded-lg p-18 ">
      <h1 >Login   </h1>
      <input className="py-2 px-4 border rounded-md"
        value={user.email}
        name="email"
        onChange={onChangeHandler}
        type="email"
        placeholder="email"
      />
      <input className="py-2 px-4 border rounded-md"
        value={user.password}
        onChange={onChangeHandler}
        type="password"
        name="password"
        placeholder="password"
      />
      <button onClick={logInHandler}>Login</button>
      <Link to={'/register'}>
      <p className="text-blue-500 text-[10px] pl-12 ml-14 hover:text-blue-400">New user ? register here</p>
      </Link>
      
    </div>
  );
}

export default Login;
