import React from 'react'
import img from '@/image/Parashar_about.png'
const ProjectCard = ({project}) => {
  return (
    <div className="w-[350px] min-h-[400px] bg-white rounded overflow-none flex flex-col">
      <img
        src={project.image}
        alt=""
        className="w-full aspect-square object-cover"
      />
      <div className="text-center flex items-center justify-center gap-1 py-3 text-2xl font-bold">
        {project.name} <span className='text-sm font-medium'>- {project.siteType}</span>
      </div>
      <p className="text-justify px-1 line-clamp-4 min-h-[80px]">
        {project.description}
      </p>
      <p className="font-semibold mx-1">Role: {project.role}</p>
      <button className='muted-rose py-2 logo-dark my-2 mx-1 hover:scale-105 transition-all ease-in-out duration-500 rounded'>see more</button>
    </div>
  )
}

export default ProjectCard
