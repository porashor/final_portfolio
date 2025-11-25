import React from 'react'
import Image from 'next/image'
import { TfiReload } from "react-icons/tfi";
import Link from 'next/link';
import OrderComponent from '../../../components/OrderComponent';
const page = async({params}) => {
    let data
    let loader = true
    try {
        const {planOrder} = await params
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan/${planOrder}`)
        data = await response.json()
    } catch (error) {
        console.log(error)
    }finally{
        loader = false
    }
    console.log(data)
    const features = data.features ? JSON.parse(data.features[0]) : [];
  return (
    loader ? <div className='w-full h-full flex items-center justify-center'><TfiReload className='animate-spin' size={40} /></div> : <div>{data.name ? 
    <div className='w-[90%] mx-auto py-5 md:py-10 space-y-5'>
        <div className='relative w-full md:w-[70%] h-[400px] md:h-[600px] mx-auto'>
            <Image fill alt="img" src={data.image} className="object-cover" />
        </div>
        <div className='w-full md:w-[70%] mx-auto flex flex-col gap-5'>
            <h1 className='text-2xl lg:text-3xl font-bold'>{data.name}</h1>
            <h1 className='text-xl'>{data.description}</h1>
            <div>
                <h1 className='text-xl lg:text-2xl font-bold'>Features</h1>
                <ul className='list-none list-inside'>
                    {
                        features.map((feature, i) => <li key={i}>✔️ {feature}</li>)
                    }
                </ul>
            </div>
            <div className='flex gap-5 items-center'>
                <h1 className='text-xl lg:text-2xl font-bold'>Duration</h1>
                <p className='text-xl'>{data.duration}</p>
            </div>
            <div className='flex gap-5 items-center'>
                <h1 className='text-xl lg:text-2xl font-bold'>Total price</h1>
                <p className='text-xl'>{data.price} taka</p>
            </div>
            <OrderComponent data={data}/>
        </div>
    </div> 
    : <div>no data</div>}</div>
  )
}

export default page
