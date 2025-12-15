'use client'
import {Elements} from "@stripe/react-stripe-js"
import DepositForm from "../../../PayComponent/DepositForm"
import { loadStripe } from "@stripe/stripe-js"
import { useParams } from "next/navigation";
import { payhandle } from '../../../Store/Payzust'
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const page = () => {
  const params = useParams();
  const id = params.deposit
  
      const {confirmDeposit, clientSecret} = payhandle()
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* main form */}
      <Elements stripe={stripe} options={{clientSecret}}>
        <DepositForm id={id} confirmDeposit={confirmDeposit} clientSecret={clientSecret}/>
      </Elements>
    </div>
  )
}

export default page
