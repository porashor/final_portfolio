'use client'
import { useEffect } from 'react'
import { MdOutlineDelete } from "react-icons/md";
import { VscLoading } from "react-icons/vsc";
import { PlanHandle } from '../Store/PlanZus';
const PlanReview = () => {
    const {allPlan, getloading, onGet, delloading, onDel, delid} = PlanHandle()
  useEffect(() => {onGet()}, [])
  return (
    <div className='w-[95%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto py-5'>
        {/* skill review  */}
      <div>
        <h1 className='text-xl font-bold'>All Projects review</h1>
        <div className='flex flex-col gap-5 justify-center items-start py-5 lg:py-10'>
          {
            getloading ? "loading " : <div className='w-full'>{allPlan.length > 0 ? allPlan.map((plan, index) => (
            <div key={index} className='flex justify-between items-center w-full'>
              <h1 className='text-xl'>{plan.name}</h1>
              <button onClick={() => onDel(plan._id)} className='text-xl'>{delloading && delid === plan._id ? <VscLoading/> : <MdOutlineDelete/>}</button>
            </div>
          )) : "no skill found"}</div>
          }
        </div>
      </div>
    </div>
  )
}

export default PlanReview
