import React from 'react'
import SkillBanner from '@/components/SkillBanner'
import SkillView from '@/components/SkillView'
export const metadata = {
  title: "Skill - Parashar Das",
  description: "Learn more about Parashar, a full-stack MERN developer specializing in React, Express, and MongoDB.",
};


const page = async() => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`);
    const data = await res.json();
    
  return (
    <div className='w-full'>
      <SkillBanner/>
      <SkillView data={data}/>
    </div>
  )
}

export default page
