import ShopHeader from '@/components/ShopHeader'
import React from 'react'

const ShopLayout = ({ children }) => {
  
  return (<div className='text-black'>
    <ShopHeader />
    {children}
    
  </div>
  )
}

export default ShopLayout