import ProjectcardLoad from '../loaders/ProjectcardLoad'
import ProductCard from './ProductCard'
const Plan = async () => {
  let data
  let loader = true
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`)
    data = await res.json()
  } catch (error) {
    console.log(error)
  }finally{
    loader = false
  }
  console.log(loader)
  return (
    <div className='py-5 lg:py-10 bg-[#eeeeee] '>
          {/* frontend  */}
          <div>
            <div className='py-5 lg:py-10 w-fit md:flex flex-wrap gap-5 lg:w-[85%] mx-auto items-center justify-start'>
                {loader ? Array.from({length: 6}).map((_, index) => <ProjectcardLoad key={index}/>) : data.map((plan, index) => (
                    <ProductCard key={index} plan={plan}/>
                ))}
            </div>
          </div>
        </div>
  )
}

export default Plan
