import React from 'react'
import CourseCard from './CourseCard'

const CertificatesEarned = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-8 mt-8'>
              <CourseCard title="Python" time = {45} Level = "Beginner" imageSrc="/Python.png" certificate />

    </div>
  )
}

export default CertificatesEarned
