import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password:""
    })


    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(e) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value
            }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In")
        navigate("/dashboard")
    }

  return (
    <>
      <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6">
        <label className='mt-4 w-full'>
            <p className='mb-1'>
                Email Address<sup className='text-red-600'>*</sup>
            </p>
            <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name='email'
                className='rounded-[0.5rem] w-full bg-richblack-800 p-[8px]'
            />

        </label>

        <label className='w-full relative'>
            <p className='mt-1 mb-1'>
                Password<sup className='text-red-600'>*</sup>
            </p>
            <div className='flex items-center'>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name='password'
                className='rounded-[0.5rem] w-full bg-richblack-800 p-[8px]'
            />

            <span className='absolute right-3 top-[48px] cursor-pointer' 
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            </div>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto'>
                    Forgot Password ?</p>
            </Link>
        </label>

        <button className='bg-yellow-400 rounded-md text-black py-[8px] mt-6'>
            Sign In
        </button>
      </form>
    </>
  )
}

export default LoginForm
