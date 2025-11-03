import React from 'react'
import SkillForm from '../../Admin/SkillForm'
import SkillReview from '../../Admin/SkillReview'
import ProjectForm from '../../Admin/ProjectForm'
import ProjectReview from '../../Admin/ProjectReview'
import TestimonialForm from '../../Admin/TestimonialForm'
import TestimonialReview from '../../Admin/TestimonialReview'
import BlogForm from '../../Admin/BlogForm'
import BlogReview from '../../Admin/BlogReview'
const page = () => {
  return (
    <div className='bg-white'>
      <SkillForm/>
      <SkillReview/>
      <ProjectForm/>
      <ProjectReview/>
      <TestimonialForm/>
      <TestimonialReview/>
      <BlogForm/>
      <BlogReview/>
    </div>
  )
}

export default page
