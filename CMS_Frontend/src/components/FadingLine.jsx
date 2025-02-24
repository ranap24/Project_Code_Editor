import React from 'react'

const FadingLine = ({ direction, both, right }) => {
  return (
    <>
      {direction === 'horizontal' ? (
        both ? (
          <div className='w-full h-[1px] bg-gradient-to-r from-paperwhite via-paperblack to-paperwhite my-4'></div>
        ) : right ? (
          <div className='w-2/5 h-[1px] bg-gradient-to-r from-paperblack to-paperwhite my-4'></div>
        ) : (
          <div className='w-2/5 h-[1px] bg-gradient-to-r from-paperwhite to-paperblack my-4'></div>
        )
      ) : (
        <div className='w-[1px] h-[100px] bg-gradient-to-b from-paperwhite via-paperblack to-paperwhite mx-4'></div>
      )}
    </>
  )
}

export default FadingLine
