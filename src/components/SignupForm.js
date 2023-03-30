import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"", 
        lastname:"", 
        email:"", 
        password:"", 
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmedPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

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
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account is Created")
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }
        
        console.log("printing account data");
        console.log(finalData);

        navigate("/dashboard");
    }

  return (
    <div>
      {/* Student - Instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
            className={`${accountType === 'student' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}    
            onClick={() => setAccountType("student")}
        >
            Student
        </button>
        <button
            className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}
        >
            Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}
        <div className='flex gap-x-4 mt-[20px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] mb-1'>First Name<sup className='text-red-500'>*</sup></p>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px]'
                />
            </label>

            <label className='w-full'>
            <p className='text-[0.875rem] mb-1'>Last Name<sup className='text-red-500'>*</sup></p>
                <input
                    required
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value={formData.lastname}
                    className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px]'
                />   
            </label>
        </div>

        {/* email address*/}
        <div className='mt-[20px]'> 
        <label className='w-full mt-[20px]'>
        <p className='text-[0.875rem] mb-1'>Email Address<sup className='text-red-500'>*</sup></p>
            <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px]'
            />   
        </label>
        </div>

        {/* create password and confirm password */}
        <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] mb-1'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type= {showPassword ? ("text") : ("password")}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                    className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px]'
                />
                <span
                 className='absolute right-3 top-[38px] cursor-pointer' 
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>

            <label className='w-full relative'>
            <p className='text-[0.875rem] mb-1'>Confirm Password<sup className='text-red-500'>*</sup></p>
                <input
                    required
                    type={showConfirmPassword ? ("text") : ("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    className='bg-richblack-800 rounded-[0.5rem] w-full p-[12px]'
                />   
                <span
                    className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowConfirmedPassword((prev) => !prev)}>
                    {showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>
        </div>

        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm

