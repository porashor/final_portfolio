
import ProductCard from './ProductCard'
const Plan = async () => {
  let data
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plan`)
    data = await res.json()
  } catch (error) {
    console.log(error)
  }
  console.log(data)
  return (
    <div className='py-5 lg:py-10 bg-[#eeeeee] '>
          {/* frontend  */}
          <div>
            <div className='py-5 lg:py-10 w-fit md:flex flex-wrap gap-5 lg:w-[85%] mx-auto items-center justify-start'>
                { data.map((plan, index) => (
                    <ProductCard key={index} plan={plan}/>
                ))}
            </div>
          </div>
        </div>
  )
}

export default Plan
