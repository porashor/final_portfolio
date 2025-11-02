'use client'
import { useEffect } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { blogHandle } from '../Store/BlogZus';
const BlogReview = () => {
    const {allBlog, getloading, onGet, delloading, onDel, delid} = blogHandle()
  useEffect(() => {onGet()}, [])
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
        {/* skill review  */}
      <div>
        <h1 className='text-xl font-bold'>All Projects review</h1>
        <div className='flex flex-col gap-5 justify-center items-start py-5 lg:py-10'>
          {
            getloading ? "loading " : <div className='w-full'>{allBlog.length > 0 ? allBlog.map((blog, index) => (
            <div key={index} className='flex justify-between items-center w-full'>
              <h1 className='text-xl'>{blog.title}</h1>
              <button onClick={() => onDel(blog._id)} className='text-xl'>{delloading && delid === blog._id ? <VscLoading/> : <MdOutlineDelete/>}</button>
            </div>
          )) : "no skill found"}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default BlogReview
