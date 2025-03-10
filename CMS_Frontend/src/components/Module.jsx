import React from 'react'

const Module = ({number,title}) => {
  return (
    <div className='w-full h-fit flex flex-row justify-between items-start p-4 border-2 border-paperblack rounded-4xl'>
        <div className='w-fit h-fit flex flex-row justify-center items-center'>
         <p className='font-raleway font-bold text-[24px]/[28px]'>{`Module ${number} :`}<span className='font-raleway font-extralight'>{title}</span></p>
        </div>
        <svg width="8" height="25" viewBox="0 0 8 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.64645 24.3536C3.84171 24.5488 4.15829 24.5488 4.35355 24.3536L7.53553 21.1716C7.7308 20.9763 7.7308 20.6597 7.53553 20.4645C7.34027 20.2692 7.02369 20.2692 6.82843 20.4645L4 23.2929L1.17157 20.4645C0.97631 20.2692 0.659727 20.2692 0.464465 20.4645C0.269203 20.6597 0.269203 20.9763 0.464465 21.1716L3.64645 24.3536ZM3.5 -2.18557e-08L3.5 24L4.5 24L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#3B3B3B"/>
</svg>

      
    </div>
  )
}

export default Module
