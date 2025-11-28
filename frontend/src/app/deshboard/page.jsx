'use client'
import ProfileDes from '../../components/ProfileDes'
import OrderDetails from '../../components/OrderDetails'
import OderProcess from '../../components/OderProcess'
import { useEffect, useState } from "react"
import userHandle from '../../Store/UserZust'
import orderHandle from '../../Store/orderZust'
const page = () => {
  const [productIDs, setProductID] = useState(null)
  const {user, getUser, getLoading} = userHandle()
  const {getOrders, orders, loading} = orderHandle()
    useEffect(() => {
        getUser()
        getOrders()
    }, [])
    console.log(user)
    console.log(productIDs)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[2fr_5fr_2fr] w-[90%] mx-auto py-10 gap-4 min-h-screen'>
      <ProfileDes profile={user} getLoading={getLoading}/>
      <OderProcess productIDs={productIDs} profile={user}/>
      <OrderDetails loading={loading} orders={orders} setProductID={setProductID} productIDs={productIDs}/>
    </div>
  )
}

export default page
