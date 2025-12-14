import { create } from "zustand"
import {toast} from "react-toastify"

export const payhandle = create((set)=>({
    clientSecret: "",
    payOver: async ( price, currency)=>{
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/pay",{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount : price * 100, currency })
            })
            const maindata = await res.json()
            if(maindata.clientSecret){
                set({clientSecret: maindata.clientSecret})
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }, 
    confirmDeposit: async (stripes, elements, client_secret)=>{
        try {
            const {error, paymentIntent} = await stripes.confirmCardPayment(client_secret, {
                payment_method:{
                    card: elements
                }
            })
            if(paymentIntent.status === "succeeded"){
                toast.success(paymentIntent.status)
                return true
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }
}))