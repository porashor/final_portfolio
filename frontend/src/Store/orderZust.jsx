import {create} from 'zustand'
import {toast} from 'react-toastify'



const orderHandle = create((set)=>({
    clientText: '',
    clientFiles: null,
    orders: [],
    onClientText: (a) => set({clientText: a}),
    onClientFiles: (a) => set({clientFiles: a}),
    loading : false,
    getOrders: async () => {
        set({loading: true})
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/order', {
                method: 'GET',
                credentials: 'include'
            })
            const appdata = await res.json()
            set({orders: appdata})
        } catch (error) {
            toast.error('Failed to fetch orders')
        }finally{
            set({loading: false})
        }
    },
    placeOrder: async (e, price, productID , clientText, clientFiles) => {
        console.log(clientText)
        e.preventDefault()
        set({loading: true})
        try {
            const user = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth', {
                method: 'GET',
                credentials: 'include'
            })
            const userData = await user.json()
            const {name, email, phone, _id: clientID} = userData
            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('price', price)
            formData.append('productID', productID)
            formData.append('clientID', clientID)
            formData.append('payStatus', 'pending')
            formData.append('clientText', clientText)
            formData.append('clientFiles', clientFiles)
            console.log(formData)
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/order', {
                method: 'POST',
                body: formData
            })
            const appdata = await res.json()
            toast.success('Order placed successfully')
        } catch (error) {
            toast.error('Failed to place order')
        }finally{
            set({loading: false})
        }
    }
}))

export default orderHandle