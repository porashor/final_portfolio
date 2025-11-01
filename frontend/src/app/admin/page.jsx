import React from 'react'
import SkillForm from '../../Admin/SkillForm'
import SkillReview from '../../Admin/SkillReview'
import ProjectForm from '../../Admin/ProjectForm'
import ProjectReview from '../../Admin/ProjectReview'
const page = () => {
  return (
    <div className='bg-white'>
      <SkillForm/>
      <SkillReview/>
      <ProjectForm/>
      <ProjectReview/>
    </div>
  )
}

export default page
