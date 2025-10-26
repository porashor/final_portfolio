import React from 'react'
import SkillBanner from '@/components/SkillBanner'
import SkillView from '@/components/SkillView'
export const metadata = {
  title: "Skill - Parashar Das",
  description: "Learn more about Parashar, a full-stack MERN developer specializing in React, Express, and MongoDB.",
};
const page = () => {
  return (
    <div className='w-full'>
      <SkillBanner/>
      <SkillView/>
    </div>
  )
}

export default page
