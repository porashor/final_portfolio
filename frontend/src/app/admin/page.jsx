import React from 'react'
import SkillForm from '../../Admin/SkillForm'
import SkillReview from '../../Admin/SkillReview'
import ProjectForm from '../../Admin/ProjectForm'
import ProjectReview from '../../Admin/ProjectReview'
import TestimonialForm from '../../Admin/TestimonialForm'
import TestimonialReview from '../../Admin/TestimonialReview'
const page = () => {
  return (
    <div className='bg-white'>
      <SkillForm/>
      <SkillReview/>
      <ProjectForm/>
      <ProjectReview/>
      <TestimonialForm/>
      <TestimonialReview/>
    </div>
  )
}

export default page
