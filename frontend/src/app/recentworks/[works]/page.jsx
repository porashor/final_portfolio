import Image from 'next/image'
import {IoIosStar} from "react-icons/io"

const page = async ({params}) => {
    const { works } = await params;
  let data;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/recentwork/${works}`
    );
    data = await response.json();
    } catch (error) {
        console.log(error);
    }
    const feature = data.features ?JSON.parse(data.features[0]) : []
    const tecnology = data.tecnologies.length > 0 ? JSON.parse(data?.tecnologies[0]) : []
    const link = data.links ? JSON.parse(data.links[0]) : []
  return (
    <div className="w-[90%] mx-auto py-5 lg:py-10 space-y-10">
      <div className='w-[90%] md:w-[80%] h-[400px] mx-auto relative'>
        <Image src={data.image} alt="My profile picture" className="object-cover" fill/>
      </div>
      <div className='w-[90%] md:w-[80%] mx-auto space-y-5'>
        <h1 className='text-2xl font-bold'>{data.name}</h1>
        <h1><span className='text-xl font-bold'>Duration:</span> {data.duration}</h1>
        <h1><span className='text-xl font-bold'>Project type:</span> {data.stack}</h1>
        <div className='flex items-center gap-2'>
            <h1 className='text-xl font-bold'>Rating:</h1>
            <div className='flex items-center gap-1'>
                {Array.from({ length: data.rate }, (_, i) => i).map((a,i)=><IoIosStar key={i} className="text-yellow-400" />)}
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <h1 className='text-xl font-bold'>Features:</h1>
            <div className='flex items-center gap-1'>
                {feature.map((a,i)=><p key={i}>{a},</p>)}
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <h1 className='text-xl font-bold'>Tecnologies:</h1>
            <div className='flex items-center gap-1'>
                {tecnology.map((a,i)=><p key={i}>{a},</p>)}
            </div>
        </div>
        <div className='flex gap-2 items-start'>
            <h1 className='text-xl font-bold'>All links:</h1>
            <div className='space-y-2'>
                {link.map((a,i)=><li className='list-none' key={i}><a href={`${a}`} target="_blank" rel="noopener noreferrer" className='hover:underline '>{a},</a></li>)}
            </div>
        </div>
        <h1 className='text-xl font-bold'>Project details:</h1>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default page
