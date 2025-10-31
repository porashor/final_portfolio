import Image from "next/image";
const SkillCard = ({skill}) => {
  let wi = skill.pogress

  return (
    <div className='w-[400px] min-h-[150px] logo-light bg-white rounded overflow-none grid grid-cols-[1fr_2fr] gap-2 px-2 border border-[#dadada]'>
      <div className='w-full flex items-center justify-center'>
        <Image src={skill.image} width={120} height={120} className='' style={{objectFit: "cover"}} alt='logo'/>
      </div>
      <div className='flex flex-col gap-1 justify-center'>
        <h1 className='font-bold'>{skill.name}</h1>
        <div>
            {skill.pogress}%
            <div className='bg-green-500 w-full h-[5px] rounded-4xl'>
                <div style={{ width: `${wi}%`}} className={`h-[5px] bg-blue-600 rounded-4xl trunsition-all ease-in-out duration-500`}></div>
            </div>
        </div>
        <div className='line-clamp-3'>
            {skill.description}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
