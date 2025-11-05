'use client'
import React from 'react'
import CountUp from 'react-countup';
const ProjectCount = () => {
  return (
    <div className='bg-light py-5 lg:py-10 flex flex-wrap items-center justify-evenly gap-5 text-2xl font-bold my-5'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1>PSD to html</h1>
        <h1><CountUp end={100} duration={3}/>+</h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1>Frontend</h1>
        <h1><CountUp end={250} duration={3}/>+</h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1>backend</h1>
        <h1><CountUp end={150} duration={3}/>+</h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1>MERN-stack</h1>
        <h1><CountUp end={450} duration={3}/>+</h1>
      </div>
    </div>
  )
}

export default ProjectCount
