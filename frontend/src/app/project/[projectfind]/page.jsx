import React from 'react'
import Image from 'next/image'
const page = async ({params}) => {
    const {projectfind} = await params
    let data
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${projectfind}`)
        data = await response.json()
    } catch (error) {
        console.log(error)
    }
    const links = data.link ? JSON.parse(data.link[0]) : []
    const features = data.features ? JSON.parse(data.features[0]) : []
    const tecnologies = data.technologies ? JSON.parse(data.technologies[0]) : []
  return (
    data.name ?
    <div className='w-[90%] mx-auto py-5 lg:py-10'>
      <div className='w-full md:w-[80%] lg:w-[70%] mx-auto flex flex-col gap-5 items-start justify-start'>
        <div className='w-full h-[400px] lg:h-[600px] relative'>
          <Image fill src={data.image} alt='project photo' className='object-cover'/>
        </div>
        <h1 className='text-2xl md:text-3xl font-bold'>{data.name}</h1>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl lg:text-2xl font-bold'>Total earn: </h1>
            <p className='text-xl'>{data.gotPrice} taka</p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl lg:text-2xl font-bold'>Site Type: </h1>
            <p className='text-xl'>{data.siteType} </p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl lg:text-2xl font-bold'>My role: </h1>
            <p className='text-xl'>{data.role} </p>
        </div>
        <div className='flex gap-5 items-center'>
            <h1 className='text-xl lg:text-2xl font-bold'>Buyer: </h1>
            <p className='text-xl'>{data.buyer} </p>
        </div>
        <div>
            <h1 className='text-xl lg:text-2xl font-bold'>Features</h1>
            <ul className='list-none list-inside'>
                {
                    features.map((feature, i) => <li key={i}>✔️ {feature}</li>)
                }
            </ul>
        </div>
        <div>
            <h1 className='text-xl lg:text-2xl font-bold'>Tecnologies</h1>
            <ul className='list-none list-inside'>
                {
                    tecnologies.map((feature, i) => <li key={i}>✔️ {feature}</li>)
                }
            </ul>
        </div>
        <div>
            <h1 className='text-xl lg:text-2xl font-bold'>Links</h1>
            <ul className='list-none list-inside'>
                {
                    links.map((feature, i) => <li href={feature} className='w-full' key={i}><a href={feature}>✔️ {feature}</a></li>)
                }
            </ul>
        </div>
        <h1 className='text-xl font-bold'>About this project</h1>
        <h1 className='text-xl'>{data.description}</h1>
      </div>
    </div>
    :
    <div>no data</div>
  )
}

export default page
