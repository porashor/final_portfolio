'use client'
import {useState} from 'react'
import Payment from './Payment'
const OrderComponent = ({data}) => {
    const [clientText, setClientText] = useState('')
    const [clientFiles, setClientFiles] = useState(null)
  return (
    <div>
        {/* header section  */}
      <div>
        <h1 className='font-bold text-xl md:text-2xl underline-offset-8'>Put your instruction</h1>
      </div>
      {/* main section  */}
      <div className='space-y-5'>
        <textarea required name="" id="" className='border-1 border-slate-400 w-full h-[220px] md:h-[120px] p-1 rounded-2xl mt-2 outline-none focus:ring ring-slate-700' minLength={0} maxLength={1000} placeholder='write with in 100 character '></textarea>
            <div className='text-sm text-slate-400'>only allow .fig, .xd, .psd, .pdf, .jpg, .jpeg, .png and max 20 mb and multiple file allowed</div>
        <div className='flex gap-2 mt-2 items-center'>
            <h6 className='text-xl font-bold'>Files</h6>
            <input type="file" required accept=".fig,.xd,.psd,.pdf,.jpg,.jpeg,.png" className='w-fit'/>
        </div>
        {/* payment system  */}
        <Payment data={data}/>
        <button type='submit' className='w-full py-2 bg-light px-2 outline-none focus:ring'>Submit</button>
      </div>
    </div>
  )
}

export default OrderComponent
