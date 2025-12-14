'use client'
import StripeCheckout from "react-stripe-checkout";
const Paypass = ({amount, token, name, currency}) => {
  return (
    <div>
      <StripeCheckout
        stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
        amount={amount * 100} 
        currency={currency || "USD"}
        token={token}
        name={name}
        billingAddress
        shippingAddress
        description={`Your total is $${amount}`}
      >
        <button className="w-full bg-green-300 text-black py-2 rounded-xl">Pay with Stripe</button>
      </StripeCheckout>
    </div>
  )
}

export default Paypass
