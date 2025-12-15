import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {/* card payment successful */}
      <div className='w-[300px] aspect-square bg-blue-500 rounded-xl flex flex-col justify-center items-center'>
        <div className='w-[100px] aspect-square animate-bounce bg-green-400 shadow-2xl shadow-slate-700 rounded-full flex items-center justify-center'>
            <h1 className='text-white text-5xl font-bold'>&#10003;</h1>
        </div>
        <h2 className='text-white text-xl font-bold'>Payment Successful!</h2>
      </div>
    </div>
  )
}

export default page
