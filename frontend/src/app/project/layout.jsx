import Foother from '@/components/Foother'
const layout = ({children}) => {
  return (
    <div className='w-full'>
      {children}
      <Foother/>
    </div>
  )
}

export default layout
