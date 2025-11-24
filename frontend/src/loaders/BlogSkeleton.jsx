import React from 'react'
import {Skeleton} from '@/components/ui/skeleton'
const BlogSkeleton = () => {
  return (
    <div className='w-full h-[120px] md:h-[150px] bg-light rounded-2xl p-2 flex flex-col gap-2 items-center justify-center'>
        <Skeleton className='w-[90%] mx-auto h-[25px] '/>
        <Skeleton className='w-[90%] mx-auto h-[25px] '/>
        <Skeleton className='w-[90%] mx-auto h-[25px] '/>
        <Skeleton className='w-[90%] mx-auto h-[25px] '/>
    </div>
  )
}

export default BlogSkeleton
