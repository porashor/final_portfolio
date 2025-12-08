'use client'
import {useState} from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_SRIPE_PUBLISHABLE_KEY);
import { VscLoading } from "react-icons/vsc";
import { IoMdCheckmark } from "react-icons/io";
const Payment = ({data}) => {

    // const stripe = useStripe();

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvc: ""
    })
  return (
    <Elements stripe={stripePromise}>
      <div className='min-w-[380px] w-fit h-fit bg-slate-200 px-4 py-5 rounded-2xl space-y-2'>
        <h1 className='font-bold text-xl md:text-2xl underline-offset-8 text-center'>Payment</h1>

        <div className='flex flex-wrap gap-2'>
          <input id="cardNumber" placeholder="Card Number" value={cardDetails.cardNumber} onChange={(e)=>setCardDetails((d)=> ({...d, cardDetails: e.target.value}) )} className='w-full md:w-[75%] lg:w-[65%] border border-slate-400 py-2 px-3'/>
          <input id="expMonth" placeholder="MM"  value={cardDetails.expMonth} onChange={(e)=>setCardDetails((d)=> ({...d, expMonth: e.target.value}) )} className='w-[10%] border border-slate-400 py-2 px-3' min={0} max={12}/>
          <input id="expYear" placeholder="YY"  value={cardDetails.expYear} onChange={(e)=>setCardDetails((d)=> ({...d, expYear: e.target.value}) )} className='w-[10%] border border-slate-400 py-2 px-3' min={0} max={2029}/>
          <input id="cvc"  value={cardDetails.cvc} onChange={(e)=>setCardDetails((d)=> ({...d, cvc: e.target.value}) )} placeholder="CVC" className='w-[10%] border border-slate-400 py-2 px-3' min={0} max={1000}/>
        </div>

        <h3>Payment status: {status? <span className='text-green-500'>Paid</span> : <span className='text-red-500'>un paid</span>}</h3>
        <h3>Payment amount: {data.price}</h3>
        <button className='bg-green-500 w-full rounded-xl text-white '>{status ? <div className='flex items-center justify-center py-1'><IoMdCheckmark /></div> : loading ? <div className='flex items-center justify-center py-1'><VscLoading className='animate-spin ' size={20}/></div>: "Pay Now" }</button>
    </div>
    </Elements>
  )
}

export default Payment
