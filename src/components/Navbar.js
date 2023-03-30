import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.jpeg'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex items-center justify-between w-11/12 max-w-[1160px] mx-auto py-4 '>
        <Link to="/">
          <img className='w-40 ' src={logo} alt="Logo"/>
        </Link>

        <nav>
          <ul className='flex text-white gap-x-6'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Login - SignUp - LogOut - DashBoard */}

        <div className='flex gap-x-4 items-center'>
          { !isLoggedIn && 
            <Link to="/Login">
              <button className='text-white bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Login
              </button>
            </Link>
          }
          { !isLoggedIn &&
            <Link to="/signup">
              <button className='text-white bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Sign Up
              </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/">
              <button className='text-white bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                onClick={() =>{
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}>
                Log Out
              </button>
            </Link>
          }
          { isLoggedIn &&
            <Link to="/dashboard">
              <button className='text-white bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Dashboard
              </button>
            </Link>
          }
        </div>
    </div>
  )
}

export default Navbar
