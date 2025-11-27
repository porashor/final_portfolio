'use client'
import orderHandle from '../Store/orderZust'



const OrderComponent = ({data}) => {
  const {price, _id: productID} = data
    const {placeOrder, loading, clientText, clientFiles, onClientText, onClientFiles} = orderHandle()
    console.log(clientText)
  return (
    <div>
        {/* header section  */}
      <div>
        <h1 className='font-bold text-xl md:text-2xl underline-offset-8'>Put your instruction</h1>
      </div>
      {/* main section  */}
      <form onSubmit={(e)=>placeOrder(e, price, productID , clientText, clientFiles )} className='space-y-5'>
        <textarea required type='textarea' value={clientText} onChange={(e) => onClientText(e.target.value)} className='border-1 border-slate-400 w-full h-[220px] md:h-[120px] p-1 rounded-2xl mt-2 outline-none focus:ring ring-slate-700' minLength={0} maxLength={1000} placeholder='write with in 100 character '/>
            <div className='text-sm text-slate-400'>only allow .fig, .xd, .psd, .pdf, .jpg, .jpeg, .png and max 20 mb and multiple file allowed</div>
        <div className='flex gap-2 mt-2 items-center'>
            <h6 className='text-xl font-bold'>Files</h6>
            <input type="file" onChange={(e)=>onClientFiles(e.target.files[0])} required accept=".fig,.xd,.psd,.pdf,.jpg,.jpeg,.png" className='w-fit'/>
        </div>
        <button type='submit' className='w-full py-2 bg-light px-2 outline-none focus:ring'>{loading ? "loading" : "order now"}</button>
      </form>
    </div>
  )
}

export default OrderComponent
