import Foother from '@/components/Foother'
import AdminNav from '@/Admin/AdminNav'

const layout = ({children}) => {
  return (
    <div className='w-full'>
      {/* <AdminNav/> */}
      {children}
      <Foother/>
    </div>
  )
}

export default layout
