'use client'
import ProjectCard from './ProjectCard'
import { useEffect } from 'react'
import { projectHandle } from '../Store/ProjectZust'
import ProjectcardLoad from '../loaders/ProjectcardLoad'
const ProjectOverview = () => {
  const {getloading, onGetProject, allproject} = projectHandle()
  useEffect(() => {onGetProject()}, [])
  console.log(allproject)
  return (
    <div className='bg-white'>
      <h1 className='text-center font-bold py-5 lg:pt-10 text-3xl lg:text-4xl'>All Projects here!</h1>
      <p className='w-[90%] lg:w-[50%] mx-auto '>There are many variations of passages of frontend, backend, html, database setup etc.</p>
      <div className='py-5 lg:py-10 w-[95%] lg:w-[80%] mx-auto '>
        {
          getloading ? <div className='block w-fit md:w-full mx-auto md:flex flex-wrap gap-5 items-center justify-start space-y-2'>{Array.from({length: 6}).map((_, index) => <ProjectcardLoad key={index}/>)}</div>  : <div className='block w-fit md:w-full mx-auto md:flex flex-wrap gap-5 items-center justify-start'>{allproject.length > 0 ? allproject.map((project, index) => (<ProjectCard key={index} project={project}/>)) : "no project found"}</div>
        }
      </div>
    </div>
  )
}

export default ProjectOverview
