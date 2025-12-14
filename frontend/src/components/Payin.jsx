'use client'
import { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Payin = () => {
    const [clientsec, setClientSec] = useState(null)
    const fetchingFunc = async () =>{
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/pay", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount : '200000', currency: "bdt" }), 
                });
                const maindata = await response.json()
                setClientSec(maindata.clientSecret)
                console.log(maindata)
            } catch (error) {
                console.log(error)
            }
        }
    useEffect( ()=>{
        fetchingFunc()
    }, [])
    console.log(clientsec)
    const stripe = useStripe()
    const element = useElements()
    const handlePayment = async (e) =>{
        e.preventDefault()
        const cardElements = element.getElement(CardElement)
        console.log(cardElements)
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientsec, {
            payment_method: {
            card: cardElements,
            billing_details: { name: "Customer Nameing" },
        },
        });
        if (error) {
        console.error("Payment failed:", error.message);
        } else if (paymentIntent.status === "succeeded") {
        console.log("Payment successful:", paymentIntent);
        }
    }

  return (
    <form onSubmit={handlePayment}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  )
}

export default Payin
