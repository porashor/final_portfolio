'use client'
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { payhandle } from "../Store/Payzust"
import { useRouter } from "next/navigation"
import orderHandle from "../Store/orderZust"

const DepositForm = ({id}) => {
    const stripes = useStripe()
    const elements = useElements()
    const {confirmDeposit, clientSecret} = payhandle()
    const router = useRouter()
    console.log(router)
    const {updateStatus} = orderHandle()
    const handle = (e)=>{
        e.preventDefault()
        const cardDetails = elements.getElement(CardNumberElement)
        const ok = confirmDeposit(stripes, cardDetails, clientSecret)
        if(ok){
          updateStatus(id, "success")
          router.push("/deshboard/success")
        }
    }
  return (
    <div>
      <form onSubmit={(e)=>handle(e)} className="w-[320px] min-h-[200px] bg-[#715A5A] text-white rounded-xl shadow-3xl p-5 space-y-5">
        <h1 className="text-center text-xl font-bold ">Via Card</h1>
        <CardNumberElement type="text" className="w-full p-2 bg-slate-100 text-black rounded-xl outline-none focus:ring focus:ring-cyan-500" />
        <CardExpiryElement type="text" className="w-full p-2 bg-slate-100 text-black rounded-xl outline-none focus:ring focus:ring-cyan-500" />
        <CardCvcElement type="text" className="w-full p-2 bg-slate-100 text-black rounded-xl outline-none focus:ring focus:ring-cyan-500" />
        <button type="submit" className="bg-cyan-500 w-full text-black py-2 px-5 rounded-xl font-bold hover:bg-cyan-300 hover:text-white duration-200">Deposit</button>
      </form>
    </div>
  )
}

export default DepositForm
