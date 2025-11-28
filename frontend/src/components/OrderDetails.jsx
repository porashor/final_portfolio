'use client'


const OrderDetails = ({orders, loading, setProductID, productIDs}) => {
  const successOrders = orders.filter(item => item.payStatus === 'success')
  const pendingOrders = orders.filter(item => item.payStatus === 'pending')
  return (
    <div className='border-slate-300 border py-3 px-5 rounded-lg'>
      <div>
        <h1 className='bg-slate-300 px-3 py-1 rounded font-bold'>Order panding</h1>
        <div className="flex flex-col ga-2">
          {loading ? <div>Loading...</div> : pendingOrders.length === 0 ? <div>No orders found</div> : pendingOrders.map((item)=>(
            <a onClick={()=>setProductID(item)} key={item._id} className={` cursor-pointer w-fit h-fit my-1 border-b last:border-0 border-slate-300 py-2 px-3 hover:bg-slate-200 rounded`}>
              <div className={` ${item._id === productIDs?._id ? 'bg-slate-300':''}`}><span className='font-bold'>Product ID:</span> {item.productID}</div>
            </a>
          ))}
        </div>
      </div>
      <div>
        <h1 className='bg-slate-300 px-3 py-1 rounded font-bold'>Order Success</h1>
        <div>
          {loading ? <div>Loading...</div> : successOrders.length === 0 ? <div>No orders found</div> : successOrders.map((item)=>(
            <div key={item._id} className='border-b last:border-0 border-slate-300 py-3'>
              <div className='space-y-1'> 
                <div><span className='font-bold'>Product ID:</span> {item.productID}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderDetails




