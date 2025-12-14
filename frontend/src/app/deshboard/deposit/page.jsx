'use client'
import {Elements} from "@stripe/react-stripe-js"
import DepositForm from "../../../PayComponent/DepositForm"
import { loadStripe } from "@stripe/stripe-js"
const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* main form */}
      <Elements stripe={stripe}>
        <DepositForm/>
      </Elements>
    </div>
  )
}

export default page
