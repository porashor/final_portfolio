'use client'
import BlogCard from './BlogCard'
import { useEffect } from 'react'
import { blogHandle } from '../Store/BlogZus'
import BlogSkeleton from '../loaders/BlogSkeleton'


const BlogBox = () => {
  const {getloading, onGet, allBlog} = blogHandle()
  useEffect(() => {onGet()}, [])
  return (
    <div className='bg-[#f0f0f0] py-5 lg:py-10'>
      <div className='w-[90%] md:w-[80%] lg:w-[60%] xl:[50%] mx-auto space-y-2 lg:space-y-5'>
        {getloading ? Array.from({length: 6}).map((_, index) => <BlogSkeleton key={index}/>) : [...allBlog].reverse().map((blog, index) => (<BlogCard key={index} blog={blog}/>))}
      </div>
    </div>
  )
}

export default BlogBox
