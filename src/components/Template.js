import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from "react-icons/fc"


const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex text-white w-11/12 max-w-[1160px] mx-auto  py-12 gap-x-12 gap-y-0'>
      
      <div className='w-11/12 max-w-[450px] mx-0'>
        <h1 className='text-2xl font-[700]'>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span className='text-blue-500 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p>
              OR
            </p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-md  gap-x-2 mt-5 py-[8px] border border-richblack-700'>
          <FcGoogle/>
          <p>Sign in With Google</p>
        </button>

      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img 
          src={frameImage} 
          alt="Pattern" 
          width={558} 
          height={504} 
          loading="Lazy" 
        />

        <img 
          src={image} 
          alt="Students" 
          width={558} 
          height={504} 
          loading="Lazy" 
          className='absolute -top-4 right-4'
        />
      </div>

    </div>
  )
}

export default Template
