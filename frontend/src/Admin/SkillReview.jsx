'use client'
import { useEffect } from 'react'
import { upSkill } from '../Store/Zustand'
import { MdOutlineDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
const SkillReview = () => {
  const {getloading, allSkill, onGet, delloading, onDel, delid} = upSkill()
  useEffect(() => {onGet()}, [])
  console.log(allSkill)
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
        {/* skill review  */}
      <div>
        <h1 className='text-xl font-bold'>All skills review</h1>
        <div className='flex flex-col gap-5 justify-center items-start py-5 lg:py-10'>
          {
            getloading ? "loading " : <div className='w-full'>{allSkill.length > 0 ? allSkill.map((skill, index) => (
            <div key={index} className='flex justify-between items-center w-full'>
              <h1 className='text-xl'>{skill.name}</h1>
              <button onClick={() => onDel(skill._id)} className='text-xl'>{delloading && delid === skill._id ? <VscLoading/> : <MdOutlineDelete/>}</button>
            </div>
          )) : "no skill found"}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default SkillReview
