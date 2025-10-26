import React from 'react'
import ProductCard from './ProductCard'
const Plan = () => {
  return (
    <div className='py-5 lg:py-10 bg-[#eeeeee] '>
          {/* frontend  */}
          <div>
            <div className='py-5 lg:py-10 flex flex-wrap gap-5 w-[95%] lg:w-[85%] mx-auto items-center justify-evenly'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
          </div>
        </div>
  )
}

export default Plan
