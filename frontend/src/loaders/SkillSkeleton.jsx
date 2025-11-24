import React from 'react'
import {Skeleton} from '@/components/ui/skeleton'


const SkillSkeleton = () => {
  return (
    <div className='w-[400px] min-h-[150px] bg-slate-200 rounded-2xl grid grid-cols-[3fr_7fr]'>
      <div className='flex items-center justify-center'>
        <Skeleton className="w-[70%] aspect-square"/>
      </div>
      <div className='flex flex-col gap-2 justify-center'>
        <Skeleton className='w-[40%] h-4 '/>
        <Skeleton className='w-[20%] h-4 '/>
        <Skeleton className='w-[90%] h-2 '/>
        <Skeleton className='w-[90%] h-12 '/>
      </div>
    </div>
  )
}

export default SkillSkeleton
