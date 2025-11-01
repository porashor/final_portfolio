'use client'
import { useEffect } from 'react'
import { TestimonialHandle } from '../Store/TestimonialZus'
import { MdOutlineDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
const TestimonialReview = () => {
     const {allTestimonial, getloading, onGet, delloading, onDel, delid} = TestimonialHandle()
  useEffect(() => {onGet()}, [])
  console.log(allTestimonial)
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
        {/* skill review  */}
      <div>
        <h1 className='text-xl font-bold'>All skills review</h1>
        <div className='flex flex-col gap-5 justify-center items-start py-5 lg:py-10'>
          {
            getloading ? "loading " : <div className='w-full'>{allTestimonial.length > 0 ? allTestimonial.map((test, index) => (
            <div key={index} className='flex justify-between items-center w-full'>
              <h1 className='text-xl'>{test.name}</h1>
              <button onClick={() => onDel(test._id)} className='text-xl'>{delloading && delid === test._id ? <VscLoading/> : <MdOutlineDelete/>}</button>
            </div>
          )) : "no skill found"}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default TestimonialReview
