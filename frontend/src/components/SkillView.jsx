import React from 'react'
import SkillCard from "@/components/SkillCard"
import Learn from './Lear'
const SkillView = () => {
  return (
    <div className='py-5 lg:py-10 bg-[#f7f7f7] '>
      {/* frontend  */}
      <div>
        <h1 className='py-2 lg:py-5 bg-light text-2xl lg:text-3xl font-bold '>Front-end</h1>
        <div className='py-5 lg:py-10 flex flex-wrap gap-5 w-[95%] lg:w-[85%] mx-auto items-center justify-evenly'>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
        </div>
        <Learn/>
      </div>
    </div>
  )
}

export default SkillView
