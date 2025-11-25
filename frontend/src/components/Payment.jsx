'use client'
import {useState} from 'react'
import { VscLoading } from "react-icons/vsc";
import { IoMdCheckmark } from "react-icons/io";
const Payment = ({data}) => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)
  return (
    <div className='w-[300px] h-fit bg-slate-200 px-4 py-5 rounded-2xl space-y-2'>
        <h1 className='font-bold text-xl md:text-2xl underline-offset-8 text-center'>Payment</h1>
        <h3>Payment status: {status? <span className='text-green-500'>Paid</span> : <span className='text-red-500'>un paid</span>}</h3>
        <h3>Payment amount: {data.price}</h3>
        <button className='bg-green-500 w-full rounded-xl text-white '>{status ? <div className='flex items-center justify-center py-1'><IoMdCheckmark /></div> : loading ? <div className='flex items-center justify-center py-1'><VscLoading className='animate-spin ' size={20}/></div>: "Pay Now" }</button>
    </div>
  )
}

export default Payment
