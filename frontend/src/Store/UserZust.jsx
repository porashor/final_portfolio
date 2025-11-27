import {create} from 'zustand'
import {toast} from 'react-toastify'



const userHandle = create((set)=>({
    name: '',
    email: '',
    phone: 0,
    password: '',
    image: null,
    onName: (a) => set({name: a}),
    onEmail: (a) => set({email: a}),
    onPhone: (a) => set({phone: a}),
    onPassword: (a) => set({password: a}),
    onImage: (a) => set({image: a}),
    sendLoading: false,
    signIn: async ({e, name, email, phone, password}) => {
        e.preventDefault()
        set({sendLoading: true})
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, email, phone, password}),
                credentials: 'include'
            })
            const appdata = await res.json()
            toast.success('Sign in successful')
        } catch (error) {
            toast.error('Sign in failed')
        }finally{
            set({sendLoading: false})
        }
    },
    profileLoading: false,
    updatepicProfile: async (id, formData) => {
        set({profileLoading: true})
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/auth/${id}`, {
                method: 'PUT',
                body: formData,
            })
            const appdata = await res.json()
            toast.success('Profile updated successfully')
        } catch (error) {
            toast.error('Profile update failed')
        }finally{
            set({profileLoading: false})
        }
    },
    logIn: async (e, email, password) => {
        console.log(email, password)
        e.preventDefault()
        set({sendLoading: true})
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}),
                credentials: 'include'
            })
            const appdata = await res.json()
            toast.success('Log in successful')
        } catch (error) {
            console.log(error)
            toast.error('Log in failed')
        }finally{
            set({sendLoading: false})
        }
    },
    user: {},
    getLoading: true,
    getUser: async () => {
        set({getLoading: true})
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth', {
                method: 'GET',
                credentials: 'include'
            })
            const appdata = await res.json()
            set({user: appdata})
        } catch (error) {
            console.log(error)
        }finally{
            set({getLoading: false})
        }
    }
}))



export default userHandle