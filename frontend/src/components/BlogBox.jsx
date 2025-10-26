import React from 'react'
import BlogCard from './BlogCard'

const BlogBox = () => {
  return (
    <div className='bg-[#f0f0f0] py-5 lg:py-10'>
      <div className='w-[90%] md:w-[80%] lg:w-[60%] xl:[50%] mx-auto space-y-2 lg:space-y-5'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}

export default BlogBox
