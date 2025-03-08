import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='bg-paperwhite flex flex-col justify-start items-start gap-4 w-full h-screen px-16 py-8 relative'>
      <div className='flex flex-row justify-center items-center'>
        <h1 className='font-raleway text-[32px] text-paperblack font-normal'>Profile</h1>
      </div>  
      <div className='flex flex-row justify-start items-center'>
        <h1 className='font-raleway font-normal text-[32px]'>Welcome <span className='font-raleway font-bold text-[32px]'>USER</span></h1>  
      </div> 
      <div className='flex flex-row justify-between items-start gap-8'>
        <NavLink to='/profile/coursesEnrolled' end className={({ isActive }) => `font-raleway ${isActive ? 'font-bold' : 'font-normal'}`}>Courses Enrolled</NavLink>
        <div className='w-[1px] h-[32px] bg-paperblack'></div>
        <NavLink to='/profile/certificatesEarned' className={({ isActive }) => `font-raleway ${isActive ? 'font-bold' : 'font-normal'}`}>Certificate Earned</NavLink>
        <div className='w-[1px] h-[32px] bg-paperblack'></div>
        <NavLink to='/profile/yourProfile' className={({ isActive }) => `font-raleway ${isActive ? 'font-bold' : 'font-normal'}`}>Your Profile</NavLink>
      </div> 
      <div>
        <Outlet />
      </div>  
    </div>
  )
}

export default Profile
