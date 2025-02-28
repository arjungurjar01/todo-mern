import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
    const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName:"",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signUpHandler = async () => {
    try {
        const res = await axios.post(
            "http://localhost:5000/api/user/register",
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
        toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col gap-4 mt-40 border rounded-lg p-18">
      <h1>Sign Up(register)</h1>
      {/* fullName */}
      <input className="py-2 px-4 border rounded-md"
        value={user.fullName}
        name="fullName"
        onChange={onChangeHandler}
        type="text"
        placeholder="write user full name..."
      />
      {/* email */}
      <input className="py-2 px-4 border rounded-md"
        value={user.email}
        name="email"
        onChange={onChangeHandler}
        type="email"
        placeholder="email"
      />
      {/* password */}
      <input className="py-2 px-4 border rounded-md"
        value={user.password}
        onChange={onChangeHandler}
        type="password"
        name="password"
        placeholder="password"
      />
      <button onClick={signUpHandler}>Sign Up</button>
      <Link to={'/login'}>
      <p className="text-blue-500 text-[12px] pl-10 ml-10 hover:text-blue-400">Already user ? login here</p>
      </Link>
    </div>
  );
}

export default SignUp;
