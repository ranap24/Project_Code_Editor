import React from 'react'

const InputComponent = ({...props}) => {
  return (
    <input className='w-full h-[72px] border-2 border-paperblack rounded-4xl bg-paperwhite text-paperblack font-raleway focus:outline-none focus:border-3 align-middle pl-8 my-4' {...props}/>
  )
}

export default InputComponent
