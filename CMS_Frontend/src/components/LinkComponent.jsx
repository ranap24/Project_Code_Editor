import React from 'react'
import { Link } from 'react-router-dom'

const LinkComponent = ({theme,text,...props}) => {
  return (
    <>
    {
       theme === 'dark' ?
       <Link className='bg-paperblack text-paperwhite font-raleway px-8 py-2 rounded-4xl border-2 border-paperblack hover:bg-paperwhite hover:text-paperblack cursor-pointer' {...props}>{text}</Link>
       :
       <Link className='bg-paperwhite text-paperblack font-raleway px-8 py-2 rounded-4xl border-2 border-paperblack hover:bg-paperblack hover:text-paperwhite cursor-pointer' {...props}>{text}</Link>
   }
   </>
  )
}

export default LinkComponent
