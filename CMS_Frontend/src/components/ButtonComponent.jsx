import React from 'react'

const ButtonComponent = ({theme,text,form,...props}) => {
  return (
    <>
    {
        form ? 
        <>
        {
            theme === 'dark' ?
            <button className='w-full h-[72px] bg-paperblack text-paperwhite font-raleway px-8 py-2 rounded-4xl border-2 border-paperblack hover:bg-paperwhite hover:text-paperblack cursor-pointer my-4' {...props}>{text}</button>
            :
            <button className='w-full  h-[72px] bg-paperwhite text-paperblack font-raleway px-8 py-2 rounded-4xl border-2 border-paperblack hover:bg-paperblack hover:text-paperwhite cursor-pointer my-4' {...props}>{text}</button>
        }
        </>
        :
        <>
         {
            theme === 'dark' ?
            <button className='bg-paperblack text-paperwhite font-raleway px-8 py-2 rounded-4xl border-2 border-paperblack hover:bg-paperwhite hover:text-paperblack cursor-pointer' {...props}>{text}</button>
            :
            <button className='bg-paperwhite text-paperblack font-raleway px-8 py-2 rounded-4xl border-2 border-paperblack hover:bg-paperblack hover:text-paperwhite cursor-pointer' {...props}>{text}</button>
        }
        </>
       
    }
    
    </>  
  )
}

export default ButtonComponent
