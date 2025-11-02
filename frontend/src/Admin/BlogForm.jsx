'use client'
import { upSkill } from '../Store/Zustand'
import { blogHandle } from '../Store/BlogZus'
const BlogForm = () => {
  const {header, autor, description, image, onAutor, onHeader, onImage, onDescription,subloading, onSubmitNow} = blogHandle()
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
      <form onSubmit={(e)=>onSubmitNow(e, image, header, autor, description)} className='w-full flex-col gap-5 items-center justify-between '>
        <div className='space-y-5 lg:space-y-0 flex flex-wrap items-center justify-between gap-5'>
          <input type="text" placeholder='add title' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={header} onChange={(e)=>onHeader(e.target.value)} required/>
          <input type="text" placeholder='autor' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={autor} onChange={(e)=>onAutor(e.target.value)} required/>
          <input required className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' type="file" name="photo" id="photo" accept="image/*" onChange={(e)=>onImage(e.target.files[0])}/>
        </div>
        <div className='py-5 w-full'>
          <textarea required className='w-full py-2 bg-light px-2 outline-none focus:ring' name="text" id="#" cols="20" rows="5" placeholder='write your experience' value={description} onChange={(e)=>onDescription(e.target.value)}/>
        </div>
        <button  type='submit' className='w-full py-2 bg-light px-2 outline-none focus:ring'>{subloading ? "loading..." : "Submit"}</button>
      </form>
    </div>
  )
}

export default BlogForm
