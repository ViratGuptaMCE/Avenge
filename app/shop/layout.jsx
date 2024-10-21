import ShopHeader from '@/components/ShopHeader'
import ImageCatalog from '@/components/ImageCatalog'
import React from 'react'

const ShopLayout = ({ children }) => {
  
  return (<div className='text-black'>
    <ShopHeader />
    <ImageCatalog />
    {children}
    
  </div>
  )
}

export default ShopLayout