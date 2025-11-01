'use client'
import { useEffect } from 'react'
import { upSkill } from '../Store/Zustand'
import { MdOutlineDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { projectHandle } from '../Store/ProjectZust';
const ProjectReview = () => {
    const {allproject, getloading, onGetProject, delloading, onDeleteProject, delid} = projectHandle()
  useEffect(() => {onGetProject()}, [])
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
        {/* skill review  */}
      <div>
        <h1 className='text-xl font-bold'>All Projects review</h1>
        <div className='flex flex-col gap-5 justify-center items-start py-5 lg:py-10'>
          {
            getloading ? "loading " : <div className='w-full'>{allproject.length > 0 ? allproject.map((project, index) => (
            <div key={index} className='flex justify-between items-center w-full'>
              <h1 className='text-xl'>{project.name}</h1>
              <button onClick={() => onDeleteProject(project._id)} className='text-xl'>{delloading && delid === project._id ? <VscLoading/> : <MdOutlineDelete/>}</button>
            </div>
          )) : "no skill found"}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectReview
