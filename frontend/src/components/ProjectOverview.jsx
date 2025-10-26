import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectOverview = () => {
  return (
    <div className='bg-light'>
      <h1 className='text-center font-bold py-5 lg:pt-10 text-3xl lg:text-4xl'>All Projects here!</h1>
      <p className='w-[90%] lg:w-[50%] mx-auto '>There are many variations of passages of frontend, backend, html, database setup etc.</p>
      <div className='py-5 lg:py-10 flex flex-wrap gap-5 w-[95%] lg:w-[80%] mx-auto items-center justify-evenly'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default ProjectOverview
