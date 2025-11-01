'use client'
import { useState } from 'react'
import { TestimonialHandle } from '../Store/TestimonialZus'
const TestimonialForm = () => {
    const [img, setImg] = useState(null)
    const show = (e)=>{
        e.preventDefault()
        console.log(img)
    }
    // 
    const {fname, position, rating, description, image, onFname, onPosition, onRating, onDescription, onImage, subloading, onSubmitNow} = TestimonialHandle()
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
      <form onSubmit={(e)=>onSubmitNow(e, img,fname, position, rating, description)} className='w-full flex-col gap-5 items-center justify-between '>
        <div className='space-y-5 lg:space-y-0 flex flex-wrap items-center justify-between gap-5'>
          <input type="text" placeholder='name' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={fname} onChange={(e)=>onFname(e.target.value)} required/>
          <input type="text" placeholder='position' className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' value={position} onChange={(e)=>onPosition(e.target.value)} required/>
         
          <input required className='w-full lg:w-[10%] py-2 bg-light px-2 outline-none focus:ring' type="number" name="rating" id="#" placeholder='rating' min="0" max='5' value={rating} onChange={(e)=>onRating(e.target.value)}/>
          <input required className='w-full lg:w-[30%] py-2 bg-light px-2 outline-none focus:ring' type="file" name="photo" id="photo" accept="image/*" onChange={(e)=>setImg(e.target.files[0])}/>
        </div>
        <div className='py-5 w-full'>
          <textarea required className='w-full py-2 bg-light px-2 outline-none focus:ring' name="text" id="#" cols="20" rows="5" placeholder='write your experience' value={description} onChange={(e)=>onDescription(e.target.value)}/>
        </div>
        <button  type='submit' className='w-full py-2 bg-light px-2 outline-none focus:ring'>{subloading ? "loading..." : "Submit"}</button>
      </form>
    </div>
  )
}

export default TestimonialForm
