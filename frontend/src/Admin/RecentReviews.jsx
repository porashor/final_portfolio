'use client'
import { useEffect } from 'react'
import { RecentWorkHandles } from '../Store/RecentWorkZus'
import { MdOutlineDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
const RecentReviews = () => {
  const {getloading, allRecentWork, onGet, delloading, onDel, delid} = RecentWorkHandles()
  useEffect(() => {onGet()}, [])
  console.log(allRecentWork)
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
        {/* skill review  */}
      <div>
        <h1 className='text-xl font-bold'>All skills review</h1>
        <div className='flex flex-col gap-5 justify-center items-start py-5 lg:py-10'>
          {
            getloading ? "loading " : <div className='w-full'>{allRecentWork.length > 0 ? allRecentWork.map((skill, index) => (
            <div key={index} className='flex justify-between items-center w-full'>
              <h1 className='text-xl'>{skill.name}</h1>
              <button onClick={() => onDel(skill._id)} className='text-xl'>{delloading && delid === skill._id ? <VscLoading/> : <MdOutlineDelete/>}</button>
            </div>
          )) : "no skill found"}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default RecentReviews
