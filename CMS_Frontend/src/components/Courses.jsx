import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
  return (
    <div className='bg-paperwhite flex flex-col justify-center items-center w-full h-screen px-16 py-8 relative'>
    <div className='flex flex-row justify-center items-center gap-4 absolute top-8 left-16'>
        <h1 className='font-raleway text-[32px] text-paperblack font-normal'>Explore Courses</h1>
    </div>      
    <div className='w-full h-full flex flex-row justify-center items-center gap-8 mt-8'>
        <CourseCard title="Python" time = {45} Level = "Beginner" imageSrc="Python.png"  />
        <CourseCard title="Javascript" time = {45} Level = "Beginner" imageSrc="Javascript.png"  />
        <CourseCard title="RAG" time = {45} Level = "Intermediate" imageSrc="RAG.png"  />
    </div>
    </div>
  )
}

export default Courses
