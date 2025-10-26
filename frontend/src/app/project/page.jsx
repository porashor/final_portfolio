import React from 'react'
import ProjectBanner from '@/components/ProjectBanner'
import ProjectCount from '../../components/ProjectCount'
import ProjectOverview from '../../components/ProjectOverview'
export const metadata = {
    title: "Project - Parashar Das",
    description: "Learn more about Parashar, a full-stack MERN developer specializing in React, Express, and MongoDB.",
}
const page = () => {
  return (
    <div>
      <ProjectBanner/>
      <ProjectCount/>
      <ProjectOverview/>
    </div>
  )
}

export default page
