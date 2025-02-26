import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const RootLayout = () => {

    const navigationLinks = [{
        to: '/',
        text: 'Home'
    },
    {
        to:'/about',
        text:'About'
    },
    {
        to: '/courses',
        text: 'Courses'
    },
    {
        to: '/contact',
        text : 'Contact'
    },
    {
        to: '/profile',
        text: 'Profile'
    }
 
];

    return (
        <div className='w-full h-full relative'>
            <div className='bg-paperblack w-8 h-[1px] fixed top-[55px] left-0 z-10'></div>
            <Outlet />
            <div className='flex flex-col items-center justify-center h-screen w-fit-content fixed bottom-8 right-8 overflow-clip'>
                <div className='flex flex-row justify-center items-center h-[750px] w-fit pr-8'>
                    <div className='flex flex-col justify-center items-end gap-24 h-full w-fit'>
                        {
                            navigationLinks.map((link, index) => <NavLink to={link.to} key={index} className={({ isActive }) => `w-[128px] h-[38px] flex flex-row justify-end items-center gap-4 font-raleway font-normal hover:text-[32px] ${isActive ? 'text-[32px] w-[256px]' : ''} hover:w-[256px]`}><p>{link.text}</p>
                                <div key={index} className='bg-paperblack w-1/4 h-[1px]'></div>
                            </NavLink>)
                        }
                    </div>
                    <div className='bg-paperblack w-[1px] h-full'></div>
                </div>
                <div className='w-[84px] h-[84px] rounded-4xl bg-paperblack absolute right-0 bottom-0'></div>
            </div>
        </div>
    )
}

export default RootLayout
